import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

const App= ()=>{
  return (
    <>
    <Navbar />
    <ItemListContainer contentmessage="Hello world, Im triying to be a React App" />
    </>
    
  );
}

export default App;
