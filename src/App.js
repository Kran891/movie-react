
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import LogInComponent from './components/LogInComponent';
import SignUpComponent from './components/SignUpComponent';
import MoviesComponent from './components/MoviesComponent';
import MovieDetailComponent from './components/MovieDetailComponent';
import AddMovieComponent from './components/AddMovieComponent';
import ChangePasswordComponent from './components/ChangePasswordComponent';
import UserProfileComponent from './components/UserProfileComponent';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/signup' Component={SignUpComponent}/>
      <Route exact path='/' Component={HomeComponent} />
      <Route path='/signin' Component={LogInComponent}/>
      <Route path='/movies'  Component={MoviesComponent}/>
      <Route path='/moviedetail/:id/:mid' Component={MovieDetailComponent} />
      <Route path='/addmovie' Component={AddMovieComponent} />
      <Route path='/changepassword' Component={ChangePasswordComponent} />
      <Route path='/profile' Component={UserProfileComponent} />
    </Routes>
  </BrowserRouter>
  //  return <Header/>
}

export default App;
