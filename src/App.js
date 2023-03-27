import {NavBar} from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    <div>
      <NavBar />
      <ItemListContainer saludo ="¡Bienvenid@s a Kawaii Store!" />
    </div>
    </>
  );
}

export default App;
