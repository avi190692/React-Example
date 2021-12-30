import React, { Component } from 'react';
import MyProvider from './MyProvider' ;
import ProductList from './ProductList';
class App extends Component {
  render() {
      return (
          <MyProvider>
              <div>
                  <header>
                      <h1>Welcome to my web store</h1>
                  </header>
                  <ProductList />
              </div>
          </MyProvider> 
      );
  }
}
export default App;