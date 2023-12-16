import axios from "axios"
import API from "./API";

var User={}
User.addUser=async(data)=>{
    axios.post(`${API}users`,data)
    .then(res=>{
        console.log(res.data);
    })
}
User.loginUser = async (data) => {
    axios.post(`${API}users/login`,data)
    .then(res => {
        console.log(res.data);
    })
}
export default User;