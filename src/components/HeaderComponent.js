import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Language from '../services/Language';
import NavDropdownComponent from './NavDropDownComponent';

function HeaderComponent() {
    const [language,setLanguage]=useState("Language")
    const [languages,setLanguages]=useState(null);
    useEffect(() => {
        
        return async () => {
         await   Language.getAllLanguages(setLanguages)
        };
    }, []);
    function changeLanguage(lan){
        setLanguage(lan)
    }
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
            <Nav.Link href="#action1">Home</Nav.Link>
            
            <NavDropdownComponent language={language} changeLanguage={changeLanguage} languages={languages}/>
            
            <NavDropdown title="Type" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Type</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;