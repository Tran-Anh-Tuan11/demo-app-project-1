import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Counter from "./components/counter/counter";
import AddItem from "./components/add-item/add-item";
import Movie from "./components/movie/movie";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Đếm số lần nhấn</Link>
            </li>
            <li>
              <Link to="/add-item">Add Item</Link>
            </li>
            <li>
              <Link to="/movie">Thêm phim</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/add-item">
            <AddItem />
          </Route>
          <Route path="/movie">
            <Movie />
          </Route>
          <Route path="/">
            <Counter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
