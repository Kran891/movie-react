import { useEffect, useState } from "react";
import Movie from "../services/Movie";
import HeaderComponent from "./HeaderComponent";
import MoviesComponent from "./MoviesComponent";

function HomeComponent() {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        
        return async () => {
            await Movie.getAllMovies(setMovies)
        };
    }, []);
    return <>
        <HeaderComponent />
        <MoviesComponent movies={movies} />
    </>
}
export default HomeComponent;