import Nav from "./componentes/Nav";
import Separar from "./componentes/Separar";
import Body from "./componentes/body";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './componentes/contactForm';


function App() {
  return (
    <div className="App">

      <Nav />
      <Separar />
      <Body />
      <Separar />
      <ContactUs />
    </div>
  );
}

export default App;