import React from "react";
import { Link } from "react-router-dom";
function NavLinkListItem(props){
  return <li><Link href={`/items/${props.name}`}>{props.name}</Link></li>
}
export default NavLinkListItem;