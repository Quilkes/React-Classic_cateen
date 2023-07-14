import { Suspense, useContext } from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading-state/Loading';
import Missing from './components/Missing';
import { Toaster } from 'react-hot-toast';
import DataContext from './context/DataContext';

function App() {
  const { Home, Menu, Login, Cart, Signup, HomeViewProduct } = useContext(DataContext);

  return (
    <main className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Suspense
          fallback={<Loading />}>
          <Home />
        </Suspense>} />
        <Route exact path='/cart' element={<Suspense
          fallback={<Loading />}>
          <Cart />
        </Suspense>} />
        <Route exact path='/menu' element={<Suspense
          fallback={<Loading />}>
          <Menu />
        </Suspense>} />
        <Route exact path='/HomeViewProduct/:productId' element={<Suspense
          fallback={<Loading />}>
          <HomeViewProduct />
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
