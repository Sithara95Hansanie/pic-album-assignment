import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import List from './components/List';
import Album from './components/Album';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<List/>}/>
      <Route exact path='/album/:id' element={<Album/>}/>


    </Routes>
   </BrowserRouter>
  );
}

export default App;
