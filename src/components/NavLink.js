import React from "react";
import { Link } from "react-router-dom";
import NavLinkList from "./NavLinkList";
function NavLink(props) {
    
    return <li className="header__nav-item">
            <Link className="dropdown-toggle header__nav-link" to={props.link} role="button" id="dropdownMenuHome" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{props.name}</Link>
            {!!props.data && <NavLinkList name={props.name} data={props.data}></NavLinkList>}
        </li>
    
}
export default NavLink;