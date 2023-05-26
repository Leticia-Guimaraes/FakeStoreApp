import "./App.css";
import { Header, Showcase, AboutUs } from "./components"
import { useFormAction } from "react-router-dom";

function App() {
  return(
  <div>
    <Header />
    <Showcase />
    <AboutUs />
  </div>
  );
};

export default App;
