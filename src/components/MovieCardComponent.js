import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import  coverImages from '../img/covers/cover.jpg'
import { getRandomIndex, images } from "../RandomImage";
import wishList from '../services/WishList';

function MovieCardComponent(props){
    var id;
    const [clicked,setclicked]=useState(false)
    const [flip,setflip]=useState(false)
    async function onClick(){
      const data = {
        id : localStorage.getItem('id'),
        mid : props.movie._id
      }
      await wishList.addToUserWishList(data);
      
      setflip(true)
      setTimeout(()=>{
        setclicked(!clicked);
        setflip(false)
        if(clicked){
          props.handleWishList(1);
        }
        else{
          props.handleWishList(-1);
        }
      },500)
    }
 return <>
    <Col md={3} className="mb-4">
        <Card style={{ width: '18rem',position:'relative' }}>
        <i class={`${clicked? 'fa-solid':'fa-regular'}  ${flip?'fa-flip': 'fa-beat'} fa-heart fa-xl`}  tooltip="wishlist" onClick={onClick} style={{color: "#f04267",position:'absolute',top:15,right:10}}></i>
        <p style={{display:"none"}}>{id=getRandomIndex()}</p>
          <Card.Img variant="top" className='imgSize' src={images[getRandomIndex()]} />
          <Card.Body>
            <Card.Title>{props.movie.name[0].toUpperCase()+props.movie.name.slice(1).toLowerCase()}</Card.Title>
            <Card.Text>
            <p className="movieCardTextStyling"><i class="fa-solid fa-clock"></i> : {new Date(props.movie.releaseDate).toDateString()}</p>
            <p className="movieCardTextStyling"><i class="fa-solid fa-globe"></i> : {(props.movie.genres.slice(0,2).map(x=>x[0].toUpperCase()+x.slice(1).toLowerCase()).join(","))}</p>
            </Card.Text>
            <Card.Footer>
                <Row>
                    <Col md={3}>
                        <Link className="btn btn-secondary" to={`/moviedetail/${id}/${props.movie._id}`}>Details</Link>
                    </Col>
                    <Col md={2}>

                    </Col>
                    <Col md={7}>
                        <Link className="btn btn-success" to={props.movie.ott.movieUrl} target="_blank">{props.movie.ott.ottId.name}</Link>
                    </Col>
                </Row>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
 </>
}
export default MovieCardComponent;