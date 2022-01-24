import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import LandingPage from './components/layout/LandingPage';
import Navbar from './components/layout/Navbar';
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
            <Navbar/>
            <Routes>
              <Route exact path='/' element={<LandingPage/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login/>} />
              
            </Routes>
          </Router>
      </Provider>
    </div>
  );
}

export default App;
