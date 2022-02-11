import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
