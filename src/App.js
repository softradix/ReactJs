import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "locomotive-scroll/src/locomotive-scroll.scss";
// import "./scss/locomotive.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { UserContext } from "./context";
import Home from "./pages";
import "./scss/App.scss";

function App() {
  const { preloader } = useContext(UserContext);
  return (
    <div className={`App ${preloader ? "overflowHidden" : ""}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
