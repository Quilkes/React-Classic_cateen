import { useState, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Loading from './components/Loading-state/Loading';
import Missing from './components/Missing';

const Home = lazy(() => import('./components/Home'));
const Menu = lazy(() => import('./components/Menu'));

function App() {

  return (
    <main className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Suspense
          fallback={<Loading />}>
          <Home />
        </Suspense>} />
        <Route exact path='/menu' element={<Suspense
          fallback={<Loading />}>
          <Menu />
        </Suspense>} />
        <Route exact path='*' element={<Missing />} />
      </Routes>
    </main>
  )
}

export default App