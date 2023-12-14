import { NavDropdown } from "react-bootstrap"

function NavDropdownComponent(props){
  return <NavDropdown title={props.language} id="navbarScrollingDropdown">
  {!!props.languages && props.languages.map(ele=>
  <NavDropdown.Item onClick={()=>{props.changeLanguage(ele.name.toUpperCase())}}>{ele.name.toUpperCase()}</NavDropdown.Item>
  )}
</NavDropdown>
}
export default NavDropdownComponent;