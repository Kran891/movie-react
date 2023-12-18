import axios from "axios"
import API from "./API";

var Movie={}
Movie.getAllTypes=async (setTypes)=>{
    try{
      axios.get(`${API}types`)
      .then(res=>setTypes(res.data))
      .catch(err=>console.log(err))
    }catch(err){

    }
}
Movie.getAllMovies=async (setMovies)=>{
  try{
    axios.get(`${API}movies`).then(
      res=>{setMovies(res.data)}
    )
   
    
  }catch(err){

  }
}
Movie.addNewMovie=async(movie)=>{
  
  axios.post(`${API}movies`,movie)
  .then(res=>{console.log(res.data)})
}
export default Movie;