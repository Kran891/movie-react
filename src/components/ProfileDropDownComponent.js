import { NavDropdown, SplitButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProfileDropDownComponent() {
    const navigate = useNavigate();
    async function handleLogout(){
        localStorage.clear();
        navigate("/");
    }
    return <SplitButton style={{ "margin-left": "10px" }}
        id={`dropdown-button-drop-start`}
        drop='start'
        variant="secondary"
        title=<i class="fa-solid fa-user"></i>
    >

        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
        <NavDropdown.Item href="/changepassword">Change Password</NavDropdown.Item>
        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>

    </SplitButton>
}
export default ProfileDropDownComponent;