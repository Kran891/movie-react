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
Movie.getAllMovies=async ()=>{
  try{
   const res=await axios.get(`${API}movies`)
   return res.data;
   
  }catch(err){

  }
}
Movie.getMovieById=async (id)=>{
  try{
   const res=await axios.get(`${API}movies/${id}`)
   return res.data;
   
  }catch(err){

  }
}

Movie.addNewMovie=async(movie)=>{
  
  axios.post(`${API}movies`,movie)
  .then(res=>{console.log(res.data)})
}
export default Movie;