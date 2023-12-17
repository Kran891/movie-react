import { NavDropdown, SplitButton } from "react-bootstrap";

function ProfileDropDownComponent() {
    return <SplitButton style={{ "margin-left": "10px" }}
        id={`dropdown-button-drop-start`}
        drop='start'
        variant="secondary"
        title=<i class="fa-solid fa-user"></i>
    >

        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
        <NavDropdown.Item href="/changepassword">Change Password</NavDropdown.Item>

    </SplitButton>
}
export default ProfileDropDownComponent;