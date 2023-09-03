import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchComponent from './components/SearchComponent';
import SearchHistory from './components/SearchHistory';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import Activeword from './components/Activeword';
function App() {
  let {api,search}=useSelector(data=>data)
  console.log(search)
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<SearchComponent></SearchComponent>}></Route>
        <Route path='/history' element={<SearchHistory></SearchHistory>}></Route>
        {search.history.map(element=>{
          return <Route path={`/word/:${element[0].word}`} element={<Activeword></Activeword>}></Route>
        })}
      </Routes>
    </div>
  );
}

export default App;
