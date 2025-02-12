import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/repeat_etc/Footer";

function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
