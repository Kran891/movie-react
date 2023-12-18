import axios from "axios"
import API from "./API"

var Genreral={}
Genreral.getAllLanguages=async ()=>{
  const res=await  axios.get(`${API}languages`)
return res.data;
}
Genreral.getAllGenres=async ()=>{
   const res=await axios.get(`${API}genres`)
return res.data
}
export default Genreral;