import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home/>} ></Route>
        </Routes>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
