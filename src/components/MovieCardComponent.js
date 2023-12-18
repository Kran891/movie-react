import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import  coverImages from '../img/covers/cover.jpg'
function MovieCardComponent(props){
 return <>
    <Col md={3} className="mb-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className='imgSize' src={coverImages} />
          <Card.Body>
            <Card.Title>{props.movie.name}</Card.Title>
            <Card.Text>
            <p><bold><i class="fa-solid fa-clock"></i></bold>.{props.movie.releaseDate}</p>
              <p><i class="fa-solid fa-globe"></i>.{props.movie.genres.slice(0,2).join(",")}</p>
            </Card.Text>
            <Card.Footer>
                <Row>
                    <Col>
                        One 
                    </Col>
                    <Col>
                        Two
                    </Col>
                </Row>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
 </>
}
export default MovieCardComponent;