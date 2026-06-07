import React from 'react';
import Navbar from './components/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Dashboard from './components/userdashboard/Dashboard';
import Profile from './components/userdashboard/Profile';
import Settings from './components/userdashboard/Settings';
import Reports from './components/userdashboard/Reports';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index path='profile' element={<Profile />} />
          <Route path='settings' element={<Settings />} />
          <Route path='reports' element={<Reports />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
