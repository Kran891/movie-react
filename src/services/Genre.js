import axios from "axios"
import API from "./API"

var Genre ={}

Genre.addGenre = async (setGenre) => {
    axios.post(`${API}genres/addgenre`,setGenre)
    .then( res => {
        console.log(res.data)
     }
    )
}

export default Genre