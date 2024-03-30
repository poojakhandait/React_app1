import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Nav from'./Nav'
import Home from './Home';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';

const App=()=> {
  return(<BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/task1' element={<Task1/>}/>
    <Route path='/task2' element={<Task2/>}/>
    <Route path='/task3' element={<Task3/>}/>
  </Routes>
  </BrowserRouter>)
 
}

export default App;
