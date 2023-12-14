import axios from "axios"
import API from "./API";

const Movie={}
Movie.getAllTypes=async (setTypes)=>{
    try{
      axios.get(`${API}types`)
      .then(res=>setTypes(res.data))
      .catch(err=>console.log(err))
    }catch(err){

    }
}
export default Movie;