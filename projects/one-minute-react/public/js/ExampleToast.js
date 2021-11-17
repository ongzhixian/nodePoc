const useState = React.useState;
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

window.MyComponents = window.MyComponents || {};
window.MyComponents.ExampleToast = ExampleToast;