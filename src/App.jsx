// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import {Login} from './pages/Login';
import {Cadastro} from './pages/Cadastro';
import { Produto } from './pages/Produto';
import { UserHome } from './pages/UserHome';
import { ProductAdd } from './pages/FormAddPrato';
import { ProductEdit } from './pages/FormEditPrato';



const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produto/show" element={<Produto />} />
        <Route path='/produto/new' element={<ProductAdd/>} />
        <Route path='/produto/edit' element={<ProductEdit/>} />
      </Routes>

    </Router>


  );
}

export default App;
