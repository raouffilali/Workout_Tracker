// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* login route */}
            <Route path="/login" element={<Login />} />
            {/* signup route */}
            <Route path="/signup" element={<Signup />} />


          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
