const e = React.createElement;
const useState = React.useState;
const Container = window.ReactBootstrap.Container;  // import Container from 'react-bootstrap/Container';
const Toast = window.ReactBootstrap.Toast;          // import Toast from 'react-bootstrap/Toast';
const Button = window.ReactBootstrap.Button;        // import Button from 'react-bootstrap/Button';

const Alert = window.ReactBootstrap.Alert;
const Navbar = window.ReactBootstrap.Navbar;
const Nav = window.ReactBootstrap.Nav;
const NavDropdown = window.ReactBootstrap.NavDropdown;

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <span>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </span>
  );
};


const App = () => (
  <Container className="p-3 top-most">
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Vaccinated Travel Lanes (VTL)</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
      {/* <Alert variant="success">This is a success alert—check it out!</Alert> */}
    </Container>
  </Container>
);

const domContainer = document.querySelector('#root');
ReactDOM.render(e(App), domContainer);