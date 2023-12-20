import { Row } from "react-bootstrap";
import MovieCardComponent from "./MovieCardComponent";

function CItemComponent(props){
  return <Row>
     {props.data.map(x => <MovieCardComponent movie={x} />)}
   </Row>
}
export default CItemComponent;