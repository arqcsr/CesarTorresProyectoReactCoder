import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

const App= ()=>{
  return (
    <>
    <Navbar />
    <ItemListContainer contentmessage="Productos disponibles" />
    </>
    
  );
}


export default App;
