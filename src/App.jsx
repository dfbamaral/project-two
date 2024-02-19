import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import BudgetPage from "./pages/BudgetPage";

function App() {
  return(
<>
    <div>
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
    <div>
      <Routes>
        {/** this is a comment  */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/budget" element={<BudgetPage />} />
      </Routes>
    </div>
  </>
  )
  
}

export default App;
