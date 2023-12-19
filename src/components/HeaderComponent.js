import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import Language from '../services/Language';
import Movie from '../services/Movie';
import NavDropdownComponent from './NavDropDownComponent';
import ProfileDropDownComponent from './ProfileDropDownComponent';

function HeaderComponent(props) {

  const [languages, setLanguages] = useState(null);
  const [type, setType] = useState("Type");

  const [types, setTypes] = useState(null);
  const id = localStorage.getItem('id');
  console.log(id)
  const navigate = useNavigate();
  useEffect(() => {

    return async () => {

      await Language.getAllLanguages(setLanguages)
      await Movie.getAllTypes(setTypes)
    };
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary pl-5">
      <Container fluid>
        <Navbar.Brand href="#">MovieBuzz</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdownComponent title={props.language} handleChange={props.handleChange} changeTitle={props.changeLanguage} data={languages} />
            <NavDropdownComponent title={props.type} handleChange={props.handleChange} changeTitle={props.changeType} data={types} />
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 searchbarStyling"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          { id != null ?
            <ProfileDropDownComponent />
            :
            (<Link className='btn btn-secondary' style={{'margin-left':'5px'}} to={"/signin"}>
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