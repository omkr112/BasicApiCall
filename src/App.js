import './App.css';
import { BrowserRouter as Router,Route,Link, Routes } from 'react-router-dom';
import Create from './components/Create';
import Update from './components/Update';


function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Create Post</Link>
              </li>
              <li>
                <Link to="/Update">Update Post</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/Update" element={<Update />} />
          </Routes>
        </div>
      </Router>

  );
}

export default App;
