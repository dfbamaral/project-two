import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AddNewEntry from "./components/AddNewEntry";
import BudgetPage from "./pages/BudgetPage";
import EntryList from "./components/EntryList";
import Error from "./pages/Error"
import Investments from "./components/Investments";
import Charts from "./components/Charts";


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
        <Route path="/add" element={<AddNewEntry />} />
        <Route path="/entrylist" element={<EntryList />} />
        <Route path='/investments' element={<Investments />} />
        <Route path="/chart" element={<Charts />} />
        <Route path="*" element={<Error />} />
        
      </Routes>
    </div>
  </>
  )
  
}

export default App;
