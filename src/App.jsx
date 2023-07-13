import { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading-state/Loading';
import Missing from './components/Missing';
import { database, storage, auth } from './firebase/firebaseSDK';
import { ref, onValue, limitToFirst, query } from 'firebase/database';
import { ref as storageRef, getDownloadURL } from 'firebase/storage';
import toast, { Toaster } from 'react-hot-toast';

// Lazy loading componenets
const Home = lazy(() => import('./components/HomeList-components/Home'));
const Menu = lazy(() => import('./components/MenuList-components/Menu'));
const Login = lazy(() => import('./components/AuthLogin/Login'));
const Cart = lazy(() => import('./components/Cart'));
const Signup = lazy(() => import('./components/AuthLogin/Signup'))
const HomeViewProduct = lazy(() => import('./components/HomeList-components/HomeViewProduct'))
// <============

function App() {
  // States
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuListPosts, setmenuListPost] = useState([]);
  const [homeListPosts, sethomeListPost] = useState([]);
  const [promotionListPosts, setPromotionListPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItem, setcartItem] = useState([]);
  const effectRan = useRef(false);
  const location = useLocation();
  // <============

  // Fuction for Resetting scroll
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [location.pathname]);
  // <============

  // Fuction for Toggling Hamburger menu
  const ToggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  // MENU API
  // Fuction for fetching datas and images from firebase
  useEffect(() => {
    // prevent default useEffect behaviour of fetching datas twice
    if (effectRan.current === false) {
      // Reference to Realtime Database
      const menuRef = ref(database, 'menu');
      onValue(menuRef, snapshot => {
        const menuDatas = snapshot.val();
        const promises = []; //declaring new array to store correct menu

        for (let id in menuDatas) {
          const product = menuDatas[id];
          // ilterate through all img in storage
          const imageRef = storageRef(storage, `menu/${id}.png`);

          // Get img url
          const promise = getDownloadURL(imageRef)
            .then(url => {
              product.image_path = url;
              return product;
            })
            .catch(error => {
              console.error(error);
              return null;
            });
          // push to the declared array
          promises.push(promise);

        }

        Promise.all(promises)
          .then(products => {
            // Remove null values and update the state
            const filteredProducts = products.filter(p => p !== null);
            setmenuListPost(filteredProducts)
            setIsLoading(false);
          })
          .catch(error => {
            console.error(error);
          });

      });

      // terminate the useEffect
      return () => {
        effectRan.current = true
      }
    }
  }, []);

  // FAVOURITE API
  useEffect(() => {
    // prevent default useEffect behaviour of fetching datas twice
    if (effectRan.current === false) {
      // Reference to Realtime Database
      const menuRef = ref(database, 'home_favourites');
      const menuQuery = query(menuRef, limitToFirst(9));

      onValue(menuQuery, snapshot => {
        const menuDatas = snapshot.val();
        const promises = []; //declaring new array to store correct menu

        for (let id in menuDatas) {
          const product = menuDatas[id];
          // ilterate through all img in storage
          const imageRef = storageRef(storage, `home_favourites/${id}.png`);

          // Get img url
          const promise = getDownloadURL(imageRef)
            .then(url => {
              product.image_path = url;
              return product;
            })
            .catch(error => {
              console.error(error);
              return null;
            });
          // push to the declared array
          promises.push(promise);
        }

        Promise.all(promises)
          .then(products => {
            // Remove null values and update the state
            const filteredProducts = products.filter(p => p !== null);
            sethomeListPost(filteredProducts)
            setIsLoading(false);
          })
          .catch(error => {
            console.error(error);
          });

      });
      // terminate the useEffect
      return () => {
        effectRan.current = true
      }
    }
  }, []);

  // PROMOTION API
  useEffect(() => {
    // prevent default useEffect behaviour of fetching datas twice
    if (effectRan.current === false) {
      // Reference to Realtime Database
      const menuRef = ref(database, 'home_favourites');
      const menuQuery = query(menuRef, limitToFirst(9));

      onValue(menuQuery, snapshot => {
        const menuDatas = snapshot.val();
        const promises = []; //declaring new array to store correct menu

        for (let id in menuDatas) {
          const product = menuDatas[id];
          // ilterate through all img in storage
          const imageRef = storageRef(storage, `home_favourites/${id}.png`);

          // Get img url
          const promise = getDownloadURL(imageRef)
            .then(url => {
              product.image_path = url;
              return product;
            })
            .catch(error => {
              console.error(error);
              return null;
            });
          // push to the declared array
          promises.push(promise);
        }

        Promise.all(promises)
          .then(products => {
            // Remove null values and update the state
            const filteredProducts = products.filter(p => p !== null);
            setPromotionListPost(filteredProducts)
            setIsLoading(false);
          })
          .catch(error => {
            console.error(error);
          });

      });
      // terminate the useEffect
      return () => {
        effectRan.current = true
      }
    }
  }, []);


  // Add to cart function
  const handleAddProduct = (product) => {
    const ProductExist = cartItem.find(item => item.id === product.id);
    {
      ProductExist
        ? setcartItem(cartItem.map(item => item.id === product.id
          ? { ...ProductExist, quatity: ProductExist.quatity + 1 }
          : item

        ))
        : setcartItem([...cartItem, { ...product, quatity: 1 }])
      toast(
        ProductExist
          ? ` ${product.name} added to cart`
          : `✅   ${product.name} added to cart`
      )
    }
  }
  // <============

  // Reduce cart item quatity function
  const handleMinuProduct = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setcartItem(cartItem.filter((filterItem) => filterItem.id !== product.id));
      toast('here is your toast.');
    }

    else {
      setcartItem(
        cartItem.map((mappedItem) =>
          mappedItem.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : mappedItem))
    };
  }

  // Clear cart
  const handleCartClearance = () => {
    setcartItem([]);
  }
  // <============

  // Total price Accumulator fuction
  const totalPrice = cartItem.reduce((acc, item) => {
    const itemQuantity = Number(item.quantity);
    const itemPrice = Number(item.price);

    if (isNaN(itemQuantity) || isNaN(itemPrice)) {
      console.warn(`Invalid quantity or price for item:`, item);
      return acc;
    }

    const itemTotalPrice = itemQuantity * itemPrice;
    return acc + itemTotalPrice;
  }, 0).toFixed(2);
  // <============

  // Reset submit fuction
  const handleSubmit = (e) => {
    e.preventDefault();
  };  // <============

  return (
    <main className="App">
      <Header
        menuOpen={menuOpen}
        ToggleMenu={ToggleMenu}
      />
      <Routes>
        <Route exact path='/' element={<Suspense
          fallback={<Loading />}>
          <Home
            homeListPosts={homeListPosts}
            promotionListPosts={promotionListPosts}
            handleAddProduct={handleAddProduct}
            isLoading={isLoading}
          />
        </Suspense>} />
        <Route exact path='/cart' element={<Suspense
          fallback={<Loading />}>
          <Cart
            homeListPosts={homeListPosts}
            handleAddProduct={handleAddProduct}
            isLoading={isLoading}
          />
        </Suspense>} />
        <Route exact path='/menu' element={<Suspense
          fallback={<Loading />}>
          <Menu
            menuListPosts={menuListPosts}
            isLoading={isLoading}
            handleAddProduct={handleAddProduct}
          />
        </Suspense>} />
        <Route exact path='/HomeViewProduct/:userId' element={<Suspense
          fallback={<Loading />}>
          <HomeViewProduct
            handleAddProduct={handleAddProduct}
            isLoading={isLoading}
          />
        </Suspense>} />
        <Route exact path='/login' element={<Suspense
          fallback={<Loading />}>
          <Login />
        </Suspense>} />
        <Route exact path='/sign-up' element={<Suspense
          fallback={<Loading />}>
          <Signup />
        </Suspense>} />

        <Route exact path='*' element={<Missing />} />
      </Routes>
      <Toaster />
      <Footer />
    </main>
  )
}

export default App
