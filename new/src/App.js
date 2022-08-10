import './App.css';
import {Route, Routes} from 'react-router-dom';
import MainU from './user/mainpage/main';
import LogInU from './user/LogIn/login';
import FindIDU from './user/find/id';
import FindPwU from './user/find/pw';
import MakeUser from './user/makeuser/makeuser';
import LoginMenuU from './user/loginmenu/loginmenu';
import MainM from './manager/main';

function App() {
  return (
    <Routes>
      <Route path='/manager/main' element={<MainM/>}/>


      <Route path="/user/home" element={<MainU />}/>
      <Route path="/user/login" element={<LogInU />}/>
      <Route path='/user/findid' element={<FindIDU />}/>
      <Route path='/user/findpw' element={<FindPwU />}/>
      <Route path='/user/makeid/' element={<MakeUser/>}/>
      <Route path='/user/loginmenu/' element={<LoginMenuU/>}/>
    </Routes>
  );
}

export default App;
