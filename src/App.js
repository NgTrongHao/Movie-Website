import './App.css';
import {Navigation} from "./component/navigation/Navigation";
import {
    Routes,
    Route,
} from "react-router-dom";
import FilmDetails from "./component/content/film/FilmDetails";
import {Home} from "./component/content/Home";

function App() {
  return (
      <div>
          <Navigation/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/film/:id' element={<FilmDetails/>}/>
          </Routes>
      </div>
  );
}

export default App;
