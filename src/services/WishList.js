import axios from "axios";
import API from "./API";

const wishList = {}

wishList.addToUserWishList = async (data) => {
    axios.post(`${API}wishlist/addtowishlist`,data)
    .then(
        res => {return res.data}
    )
}
wishList.removeFromUserWishList = async (data) => {
    axios.post(`${API}wishlist/removefromwishlist`,data)
    .then(
        res => {return res.data}
    )
}
wishList.getUserWishList = async (id,setWishLists) => {
    axios.get(`${API}movies/wishlist/${id}`)
    .then(
        res => {
            setWishLists(res.data);
            return res.data;
        }
    )
}
wishList.getUserWishListById = async (id,setWishListCount) => {
    axios.get(`${API}movies/wishlist/${id}`)
    .then(
        res => {
            setWishListCount(res.data.length)
            return res.data.length;
        }
    )
}

export default wishList