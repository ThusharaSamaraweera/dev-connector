import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Provider} from 'react-redux';

import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import LandingPage from './components/layout/LandingPage';
import Navbar from './components/layout/Navbar';
import store from './store/store';
import Alert from './components/layout/Alert';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
            <Navbar/>
            <Alert/>
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
