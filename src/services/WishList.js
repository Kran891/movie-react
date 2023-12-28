import axios from "axios";
import API from "./API";

const wishList = {}

wishList.addToUserWishList = async (data) => {
    axios.post(`${API}wishlist/addtowishlist`,data)
    .then(
        res => {return res.data}
    )
}
wishList.getUserWishList = async (id,setMovies) => {
    axios.get(`${API}movies/wishlist/${id}`)
    .then(
        res => {
            setMovies(res.data);
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