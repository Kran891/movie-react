import axios from "axios"

import API from "./API";

var Movie={}
Movie.getAllTypes=async (setTypes)=>{
    try{
      axios.get(`${API}types`)
      .then(res=>{
        res.data.unshift("All Types")
        setTypes(res.data)})
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
Movie.getAllUpcomingMovies=async ()=>{
  try{
   const res=await axios.get(`${API}movies/upcoming`)
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
 
  const formData=new FormData();
  formData.append('genres',JSON.stringify(movie.genres))
  formData.append('languages',JSON.stringify(movie.languages))
  formData.append('ott',JSON.stringify(movie.ott))
  formData.append('name',movie.name)
  formData.append('rating',movie.rating)
  formData.append('releaseDate',movie.releaseDate)
  formData.append('description',movie.description)
  formData.append('movieType',movie.movieType)
  formData.append('moviePoster',movie.moviePoster)

  axios.post(`${API}movies`,formData)
  .then(res=>{console.log(res.data)})
}
export default Movie;