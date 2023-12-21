import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Movie from "../services/Movie";
import HeaderComponent from "./HeaderComponent";
import HeadingComponent from "./HeadingComponent";
import MoviesComponent from "./MoviesComponent";

function HomeComponent() {
    const [movies, setMovies] = useState(null);
    const [moviesList, setMoviesList] = useState(null);
    const [upcoming, setUpcoming] = useState(null);
    const [searchs, setSerachs] = useState(null);
    var data;
    useEffect(() => {

        return async () => {

            data = await Movie.getAllMovies()
            setMovies(data)
            setMoviesList(data)
            setSerachs(data)
            data = await Movie.getAllUpcomingMovies()
            setUpcoming(data)
        };
    }, [0]);
    function handleChange(language, type) {
        if(language === "ALL LANGUAGES" && type === "ALL TYPES"){
            setMovies(moviesList)
        }
        else if(language !== "ALL LANGUAGES" && type !== "ALL TYPES"){
            setMovies([...moviesList.filter(x => x.typeId.name == (type.toLowerCase()) && x.languages.includes(language.toLowerCase()))])
        }
        else if (type === "ALL TYPES") {
            if(language !== "ALL LANGUAGES"){
                setMovies([...moviesList.filter(x => x.languages.includes(language.toLowerCase()))])
            }
            else{
                setMovies([...moviesList.filter(x => x.typeId.name == (type.toLowerCase()))])
            }
        }
        else if (language === "ALL LANGUAGES") {
            if(type !== "ALL TYPES"){
                setMovies([...moviesList.filter(x => x.typeId.name == (type.toLowerCase()))])
            }
            else{
                setMovies([...moviesList.filter(x => x.languages.includes(language.toLowerCase()))])
            }
            
        }
        setSerachs(movies)
    }

    function handleSearch(search){
        setMovies([...searchs.filter(x=>x.name.startsWith(search) || x.typeId.name.startsWith(search) || x.languages.some(y=>y.startsWith(search) || x.genres.some(y=>y.startsWith(search))))])
    }
    return <>
        <HeaderComponent handleChange={handleChange} handleSearch={handleSearch} />
        {movies && !!movies.length && <HeadingComponent heading={`👻👻👻👻 Availabe Movies 👻👻👻👻`} />}
        <MoviesComponent movies={movies} />
        {upcoming && !!upcoming.length && <HeadingComponent heading={`💀💀💀💀 Upcoming Movies 💀💀💀💀`}/>}
        <MoviesComponent movies={upcoming} />
    </>
}
export default HomeComponent;