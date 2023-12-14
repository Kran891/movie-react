
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import LogIn from './components/LogInComponent';

import SignUp from './components/SignUpComponent';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/signup' Component={SignUp}/>
      <Route exact path='/' Component={HomeComponent} />
      <Route path='/signin' Component={LogIn}/>
    </Routes>
  </BrowserRouter>
  //  return <Header/>
}

export default App;
