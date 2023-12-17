import axios from "axios"
import API from "./API"

var Genreral={}
Genreral.getAllLanguages=async (setLanguages)=>{
    axios.get(`${API}languages`)
    .then(res=>
        setLanguages(res.data.map(x=>{return{label:x,value:x}})))
    .catch
    (err=>{

    })
}
Genreral.getAllGenres=async (setGenres)=>{
    axios.get(`${API}languages`)
    .then(res=>
        setGenres(res.data.map(x=>{return{label:x,value:x}})))
    .catch
    (err=>{
        
    })
}
export default Genreral;