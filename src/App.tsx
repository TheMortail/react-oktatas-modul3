import React from 'react';
import './App.css';
import ZooComponent from './components/ZooComponent';
import ProductsContainer from './containers/ProductsContainer';

function App() {
  return (
    <div>
      <ZooComponent />
      <hr style={{ margin: '50px 0' }} />
      <ProductsContainer />
    </div>
  );
}

export default App;
