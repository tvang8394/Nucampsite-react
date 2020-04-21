import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Direcroty from './components/DirectoryComponent'
function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">NuCampBrand</NavbarBrand>
        </div>
      </Navbar>
      <Direcroty />
    </div>
  );
}

export default App;
