import axios from "axios"
import API from "./API";

var User={}
User.addUser=async(data,navigate)=>{
    axios.post(`${API}users`,data)
    .then(res=>{
        if(res.status !== 401){
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("id",res.data.id);
            navigate("/")
        }
        else{
            navigate("/signin")
        }
        console.log(res.data);
    })
}
User.loginUser = async (data,navigate) => {
   try {
    axios.post(`${API}users/login`,data)
    .then(res => {
        if(res.status !== 401){
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("id",res.data.id);
            localStorage.setItem("role",res.data.roles[0]);
            navigate("/")
        }
        else{
            navigate("/signin")
        }
        console.log(res);
    }).catch(err=>{

    })
   } catch (error) {
     
   } 
}
User.changePassword = async (data,navigate) => {
    data.userId = localStorage.getItem('id');
    axios.post(`${API}users/changepassword`,data)
    .then( res => {
        if(res.status !== 401){
            localStorage.clear();
            navigate('/signin');
        }
    })
}
User.getUser = async (setUser) => {
    const userId = localStorage.getItem('id');
    const data = {
        userId : userId,
        token : localStorage.getItem("token")
    }
    axios.post(`${API}users/getuser`,data)
    .then( res => {
        setUser(res.data);
        console.log(res.data);
    })
}
User.updateUser = async (data) => {
    data.userId = localStorage.getItem('id');
    data.token = localStorage.getItem('token');
    axios.post(`${API}users/updateuser`,data)
    .then( res => {
        console.log(res.data);
    })
}
export default User;