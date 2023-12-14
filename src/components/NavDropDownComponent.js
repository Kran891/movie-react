import { NavDropdown } from "react-bootstrap"

function NavDropdownComponent(props){
  return <NavDropdown title={props.title} id="navbarScrollingDropdown">
  {props.data && props.data.map(ele=>
  <NavDropdown.Item onClick={()=>{props.changeTitle(ele.name.toUpperCase())}}>{ele.name.toUpperCase()}</NavDropdown.Item>
  )}
</NavDropdown>
}
export default NavDropdownComponent;