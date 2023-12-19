import { NavDropdown, SplitButton } from "react-bootstrap"

function NavDropdownComponent(props) {
  return <SplitButton style={{"margin-left":"10px"}}
  id={`dropdown-button-drop-start`}
  drop='start'
  variant="secondary"
  title = {props.title}
>
    {props.data && props.data.map(ele =>
      

        <NavDropdown.Item  onClick={() => { props.changeTitle(ele.toUpperCase()); }}>{ele.toUpperCase()}</NavDropdown.Item>
      
    )}
  </SplitButton>
}
export default NavDropdownComponent;
