import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

const App= ()=>{
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer contentmessage="Productos disponibles" /> }/> 
          <Route path="/category/:idCategory" element={<ItemListContainer contentmessage="Productos filtrados" /> }/> 
          <Route path="/item/" element={<ItemDetailContainer />}/>
        </Routes>
      </>
    </BrowserRouter>
    
  );
}


export default App;
