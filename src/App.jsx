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
        <Route exact path='/HomeViewProduct/:userId' element={<Suspense
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
