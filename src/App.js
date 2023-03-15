import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen';
import UserReact from './screens/UserReact';
import CategoryProduct from './screens/CategoryProduct';
import ProductsDetail from './screens/ProductsDetail'
import CartScreen from './screens/CartScreen';

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen/>} exact />
          <Route path='/register' element={<RegisterScreen />}/>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path='/detail' element={<UserReact/>} />
          <Route path='/products/category/:category' element={<CategoryProduct/>}/>
          <Route path='/products/detail/:id' element={<ProductsDetail/>}/>
          <Route path='/cart' element={<CartScreen/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
