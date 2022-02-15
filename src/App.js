import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

const App= ()=>{
  return (
    <>
      <Navbar />
      {/* <ItemListContainer contentmessage="Productos disponibles" /> */}
      <ItemDetailContainer />
    </>
    
  );
}


export default App;
