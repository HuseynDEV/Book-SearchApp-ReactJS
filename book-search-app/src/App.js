import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import MyBook from './Pages/MyBook/MyBook';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/myBook' element={<MyBook />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
