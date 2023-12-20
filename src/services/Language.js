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
Language.addLanguage = async (setLanguage) => {
    axios.post(`${API}languages/addlanguage`,setLanguage)
    .then( res => {
        console.log(res.data)
     }
    )
}
export default Language;