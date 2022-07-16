// App.jsx
import { Booklist } from "./components/Booklist";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

const App = () => {
  const getDataFromAPI = async (keyword) => {
    const requestUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=";
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  };
  const languages = ["sunflowers", "garden", "flame"];
  return (
    <BrowserRouter>
      <h1>react app</h1>
      <ul>
        <li>
          <Link to="/sunflowers">ひまわり</Link>
        </li>
        <li>
          <Link to="/garden">庭</Link>
        </li>
        <li>
          <Link to="/flame">炎</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/sunflowers" element={<Booklist language={languages[0]}  getData={getDataFromAPI} />} />
        <Route path="/garden" element={<Booklist language={languages[1]}  getData={getDataFromAPI} />} />
        <Route path="/flame" element={<Booklist language={languages[2]} getData={getDataFromAPI}/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;