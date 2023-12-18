import { useEffect, useState } from "react";
import Movie from "../services/Movie";
import HeaderComponent from "./HeaderComponent";
import MoviesComponent from "./MoviesComponent";

function HomeComponent() {
    const [movies, setMovies] = useState(null);
    const [language,setLanguage]=useState("Language")
    const [type, setType] = useState("Type");
    var moviesDB;
    function handleChange(language,type){
     if(language !=="Language" && type ==="Type")
    {
        setMovies({...moviesDB.filter(x=>x.languages.includes(language))})
    }
    else if(language ==="Language" && type !=="Type"){
        setMovies({...moviesDB.filter(x=>x.typeId.name==(type))}) 
    }
    else{
        setMovies({...moviesDB.filter(x=>x.typeId.name==(language) && x.languages.includes(language))})  
    }
    }
    function changeLanguage(lan){
        setLanguage(lan)
    }
    function changeType(type){
        setType(type)
    }
    useEffect(() => {
        
        return async () => {
           moviesDB= await Movie.getAllMovies()
           setMovies(moviesDB)
        };
    }, []);
    return <>
        <HeaderComponent handleChange={handleChange} language={language} type={type} changeLanguage={changeLanguage} changeType={changeType}/>
        <MoviesComponent movies={movies} />
    </>
}
export default HomeComponent;