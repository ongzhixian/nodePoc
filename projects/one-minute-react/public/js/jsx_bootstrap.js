
const e = React.createElement;
const useState = React.useState;
const Container = window.ReactBootstrap.Container;  // import Container from 'react-bootstrap/Container';
const Toast = window.ReactBootstrap.Toast;          // import Toast from 'react-bootstrap/Toast';
const Button = window.ReactBootstrap.Button;        // import Button from 'react-bootstrap/Button';

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
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </Container>
  </Container>
);

const domContainer = document.querySelector('#root');
ReactDOM.render(e(App), domContainer);