import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './user/mainpage/main';
import LogIn from './user/LogIn/login';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Main />}/>
      <Route path="/login" element={<LogIn />}/>
    </Routes>
  );
}

export default App;
