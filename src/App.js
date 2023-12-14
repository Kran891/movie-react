
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './components/Home';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home}/>
      
    </Routes>
  </BrowserRouter>
  //  return <Header/>
}

export default App;
