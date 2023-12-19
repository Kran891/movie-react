import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import  coverImages from '../img/covers/cover.jpg'
import { getRandomIndex, images } from "../RandomImage";
function MovieCardComponent(props){
    var id;
 return <>
    <Col md={3} className="mb-4">
        <Card style={{ width: '18rem' }}>
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
                        <Link className="btn btn-link" to={`/moviedetail/${id}/${props.movie._id}`}>Details</Link>
                    </Col>
                    <Col md={9}>
                        <Link className="btn btn-link" to={props.movie.ott.movieUrl} target="_blank">{props.movie.ott.ottId.name}</Link>
                    </Col>
                </Row>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
 </>
}
export default MovieCardComponent;