import axios from "axios";
import API from "./API";

var Language={}
Language.getAllLanguages=async(setLanguages)=>{
    try{
       const res=await axios.get(`${API}languages`);
       setLanguages(res.data)
    }catch(err){
        console.log(err);
    }
}
export default Language;