import React from "react";
import NavLinkListItem from "./NavLinkListItem";
function NavLinkList(props){
   return <ul class="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuCatalog">
  { props.items.map( (x) => (<NavLinkListItem name={x} ></NavLinkListItem>))}
   
</ul>
}
export default NavLinkList;