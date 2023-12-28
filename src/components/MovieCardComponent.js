import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import bufferToImage from "../BufferToImage";
import  coverImages from '../img/covers/cover.jpg'
import { getRandomIndex, images } from "../RandomImage";
import wishList from '../services/WishList';

function MovieCardComponent(props){
    
    const [clicked,setclicked]=useState(true)
    const [flip,setflip]=useState(false)
    const [imageURL,setImageURL]=useState(null)
    const [wishLists,setWishLists]=useState(null)
    useEffect(() => {
      
      return async () => {
        if(localStorage.getItem('id') != null){
          await wishList.getUserWishList(localStorage.getItem('id'),setWishLists)
        }
        const url = bufferToImage(props.movie.posterId)
        setImageURL(url)
      };
    }, []);
    
    async function onClick(){
      let wishListMovieIds = []
      wishLists.forEach(wishList => {
        wishListMovieIds.push(wishList.movieId);
      });
      if(clicked && !wishListMovieIds.includes(props.movie._id)){
        await addToWishList()
        props.handleWishList(1);
      }
      else{
        await removeFromWishList()
        props.handleWishList(-1);
      }
      setflip(true)
      setTimeout(()=>{
        setclicked(!clicked);
        setflip(false)
       
      },500)
    }
    async function addToWishList(){
      const data = {
        id : localStorage.getItem('id'),
        mid : props.movie._id
      }
      await wishList.addToUserWishList(data);
    }
    async function removeFromWishList(){
      const data = {
        id : localStorage.getItem('id'),
        mid : props.movie._id
      }
      await wishList.removeFromUserWishList(data);
    }
 return <>
    <Col md={3} className="mb-4">
        <Card style={{ width: '18rem',position:'relative' }}>
          {
            localStorage.getItem('id') && <i class={`${clicked?'fa-regular':'fa-solid'}  ${flip?'fa-flip': 'fa-beat'} fa-heart fa-xl`} tooltip="wishlist" onClick={onClick} style={{color: "#f04267",position:'absolute',top:15,right:10}}></i>
          }
          <Card.Img variant="top" className='imgSize' alt="Data" src={imageURL}/>
          <Card.Body>
            <Card.Title>{props.movie.name[0].toUpperCase()+props.movie.name.slice(1).toLowerCase()}</Card.Title>
            <Card.Text>
            <p className="movieCardTextStyling"><i class="fa-solid fa-clock"></i> : {new Date(props.movie.releaseDate).toDateString()}</p>
            <p className="movieCardTextStyling"><i class="fa-solid fa-globe"></i> : {(props.movie.genres.slice(0,2).map(x=>x[0].toUpperCase()+x.slice(1).toLowerCase()).join(","))}</p>
            </Card.Text>
            <Card.Footer>
                <Row>
                    <Col md={3}>
                        <Link className="btn btn-secondary" to={`/moviedetail/${props.movie._id}`}>Details</Link>
                    </Col>
                    <Col md={2}>

                    </Col>
                    <Col md={7}>
                        <Link className="btn btn-success" to={`https://${props.movie.ott.movieUrl}`} target="_blank">{props.movie.ott.ottId.name}</Link>
                    </Col>
                </Row>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
 </>
}
export default MovieCardComponent;