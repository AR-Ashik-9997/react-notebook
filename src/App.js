import { Route, Routes } from "react-router-dom";
import "./App.css";
import Css from "./components/css/Css";
import Git from "./components/git/Git";
import Header from "./components/header/Header";
import Html from "./components/html/Html";
import JavaScript from "./components/javaScript/JavaScript";
import Reactjs from "./components/react/Reactjs";
import banner from "./components/images/top-bg.png";
import { useState } from "react";
import axios from "axios";


function App() {
  const [data, setData] = useState([]);
  async function fetchData() {
    const request = await axios.get(
      "https://ar-ashik-9997.github.io/jsonapi/data.json"
    );
    setData(request.data);
    return request;
  }
  fetchData();
  return (
    <div className="container pt-10 px-10 mx-auto text-center">
      <img src={banner} alt="" className="mx-auto" />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/html" element={<Html html={data.HTML} />} />
        <Route path="/css" element={<Css css={data.CSS} />} />
        <Route path="/javaScript" element={<JavaScript js={data.JavaScript}/>} />
        <Route path="/Git" element={<Git git={data.Git}/>} />
        <Route path="/React" element={<Reactjs react={data.React}/>} />        
      </Routes>
    </div>
  );
}

export default App;
