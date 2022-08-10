import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './user/mainpage/main';
import LogIn from './user/LogIn/login';
import FindID from './user/find/id';

function App() {
  return (
    <Routes>
      <Route path="/user/home" element={<Main />}/>
      <Route path="/user/login" element={<LogIn />}/>
      <Route path='/user/findid' element={<FindID />}/>
    </Routes>
  );
}

export default App;
