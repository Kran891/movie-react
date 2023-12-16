
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import LogInComponent from './components/LogInComponent';
import SignUpComponent from './components/SignUpComponent';
import MoviesComponent from './components/MoviesComponent';
import MovieDetailComponent from './components/MovieDetailComponent';
import AddMovieComponent from './components/AddMovieComponent';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/signup' Component={SignUpComponent}/>
      <Route exact path='/' Component={HomeComponent} />
      <Route path='/signin' Component={LogInComponent}/>
      <Route path='/movies'  Component={MoviesComponent}/>
      <Route path='/moviedetail' Component={MovieDetailComponent} />
      <Route path='/addmovie' Component={AddMovieComponent} />
    </Routes>
  </BrowserRouter>
  //  return <Header/>
}

export default App;
