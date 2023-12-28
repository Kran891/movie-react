import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import Language from '../services/Language';
import Movie from '../services/Movie';
import wishList from '../services/WishList';
import NavDropdownComponent from './NavDropDownComponent';
import ProfileDropDownComponent from './ProfileDropDownComponent';

function HeaderComponent(props) {

  const [languages, setLanguages] = useState(null);
    const [language,setLanguage]=useState("ALL LANGUAGES")
  const [type, setType] = useState("ALL TYPES")
  const [search,setSearch]=useState("");
  const [types, setTypes] = useState(null);
  const id = localStorage.getItem('id');
  useEffect(() => {

    return async () => {

      await Language.getAllLanguages(setLanguages)
      await Movie.getAllTypes(setTypes)
    };
  }, []);
  function changeLanguage(lang){
   setLanguage(lang)
   setSearch("")
   props.handleChange(lang,type)
  }
  function changeType(tp){
    setType(tp)
    setSearch("")
    props.handleChange(language,tp)
   }
   function handleChange(event){
    const {value}=event.target;
     props.handleSearch(value.trim().toLowerCase())
    setSearch(value)
 }
 function handleClick(event){
  event.preventDefault()
  setSearch("")
  
 }
  return (
    <Navbar expand="lg" className="bg-body-tertiary pl-5">
      <Container fluid>
        <Navbar.Brand href="/">MovieBuzz</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            
            <NavDropdownComponent title={language}   changeTitle={changeLanguage} data={languages}/>
            <NavDropdownComponent title={type}  changeTitle={changeType}  data={types}/>
          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 searchbarStyling"
              aria-label="Search"
              value={search}
              onChange={handleChange}
            />
            <Button variant="outline-success" onClick={handleClick}>Search</Button>
            
          </Form>
         
          
          { id != null ?
          <>
          <Link className='btn btn-outline-primary' to={'/wishlist'} style={{marginLeft:"5px"}}><i class={`fa-solid  fa-heart fa-xl`} style={{color: "#f04267"}}></i>{props.wishListCount}</Link>
            <ProfileDropDownComponent /></>
            :
            (<Link className='btn btn-secondary' style={{marginLeft:'5px'}} to={"/signin"}>
                SignIn
            </Link>)
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;

///some changes
//Smaple changes