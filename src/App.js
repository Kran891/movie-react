
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './components/LogInComponent';

import SignUp from './components/SignUpComponent';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/signup' Component={SignUp}/>
      <Route path='/signin' Component={LogIn}/>
    </Routes>
  </BrowserRouter>
  //  return <Header/>
}

export default App;
