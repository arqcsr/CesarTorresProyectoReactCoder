import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

const App= ()=>{
  return (
    <CartContextProvider>
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer contentmessage="Productos disponibles" /> }/> 
            <Route path="/category/:idCategory" element={<ItemListContainer contentmessage="Productos filtrados" /> }/> 
            <Route path="/item/:idDetail" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </>
      </BrowserRouter>
    </CartContextProvider>
    
  );
}


export default App;
