import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Loading from './components/Loading-state/Loading';
import Missing from './components/Missing';
import { database, storage, auth } from './firebase/firebaseSDK';
import { ref, onValue } from 'firebase/database';
import { ref as storageRef, getDownloadURL } from 'firebase/storage';

// Lazy loading componenets
const Home = lazy(() => import('./components/HomeList-components/Home'));
const Menu = lazy(() => import('./components/MenuList-components/Menu'));
// <============

function App() {
  // States
  const [menuListPosts, setmenuListPost] = useState([]);
  const [homeListPosts, sethomeListPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItem, setcartItem] = useState([]);
  // <============

  // Fuction for fetching datas and images from firebase
  useEffect(() => {
    // Reference to Realtime Database
    const menuRef = ref(database, 'menu');
    onValue(menuRef, snapshot => {
      const menuDatas = snapshot.val();
      const promises = []; //declaring new array to store correct menu

      for (let id in menuDatas) {
        const product = menuDatas[id];
        // ilterate through all img in storage
        const imageRef = storageRef(storage, `menu/${id}.jpg`);

        // Get img url
        const promise = getDownloadURL(imageRef)
          .then(url => {
            product.image = url;
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
  }, []);


  useEffect(() => {
    // Reference to Realtime Database
    const menuRef = ref(database, 'home_favourites');
    onValue(menuRef, snapshot => {
      const menuDatas = snapshot.val();
      const promises = []; //declaring new array to store correct menu

      for (let id in menuDatas) {
        const product = menuDatas[id];
        // ilterate through all img in storage
        const imageRef = storageRef(storage, `home_favourites/${id}.jpg`);

        // Get img url
        const promise = getDownloadURL(imageRef)
          .then(url => {
            product.image = url;
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
    }
  }
  // <============

  const handleMinuProduct = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setcartItem(cartItem.filter((filterItem) => filterItem.id !== product.id));
    }
    
    else {
      setcartItem(
        cartItem.map((mappedItem) =>
          mappedItem.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : mappedItem))
    };
  }

  return (
    <main className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Suspense
          fallback={<Loading />}>
          <Home
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
        <Route exact path='*' element={<Missing />} />
      </Routes>
    </main>
  )
}

export default App