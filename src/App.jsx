import { useState, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Loading from './components/Loading-state/Loading';
import Missing from './components/Missing';

const Home = lazy(() => import('./components/HomeList-components/Home'));
const Menu = lazy(() => import('./components/MenuList-components/Menu'));

function App() {
  const [menuListPosts, setmenuListPost] = useState([]);
  const [homeListPosts, sethomeListPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItem, setcartItem] = useState([]);

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