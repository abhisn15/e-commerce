import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./Router/Error/Error";
import Home from "./Router/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import DesainPerhiasan from "./Router/DesainPerhiasan/DesainPerhiasan";
import Auth from "./Router/Login-Registrasi/Auth";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desain-perhiasan" element={<DesainPerhiasan />} />
        <Route path="/login" element={<Auth />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
