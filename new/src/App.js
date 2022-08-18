import './App.css';
import {Route, Routes} from 'react-router-dom';
import MainU from './user/mainpage/main';
import LogInU from './user/LogIn/login';
import FindIDU from './user/find/id';
import FindPwU from './user/find/pw';
import MakeUser from './user/makeuser/makeuser';
import LoginMenuU from './user/loginmenu/loginmenu';
import MainM from './manager/main';
import ChooseRoomU from './user/makeroom/chooseroom';
import ChooseU from './user/makeroom/choose';
import RandomU from './user/makeroom/random';
import QustionU from './user/pastQustion/QustionU';
import ParticipateU from './user/participate/ParticipateU';
import DateM from './manager/date/date';
import NameM from './manager/name/name';
import HomeM from './manager/home/home';
import LoginM from './manager/login/login';
import TrashM from './manager/trash/trash';

function App() {
  return (
    <Routes>
      <Route path='/manager/main' element={<MainM/>}/>
      <Route path='/manager/date' element={<DateM/>}/>
      <Route path='/manager/name' element={<NameM/>}/>
      <Route path='/manager/home' element={<HomeM/>}/>
      <Route path='/manager/login' element={<LoginM/>}/>
      <Route path='/manager/trash' element={<TrashM/>}/>



      <Route path="/user/home" element={<MainU />}/>
      <Route path="/user/login" element={<LogInU />}/>
      <Route path='/user/findid' element={<FindIDU />}/>
      <Route path='/user/findpw' element={<FindPwU />}/>
      <Route path='/user/makeid' element={<MakeUser/>}/>
      <Route path='/user/loginmenu' element={<LoginMenuU/>}/>
      <Route path='/user/makeroom' element={<ChooseRoomU/>}/>
      <Route path='/user/makeroom/choose' element={<ChooseU/>}/>
      <Route path='/user/makeroom/random' element={<RandomU/>}/>
      <Route path='/user/pastQustion' element={<QustionU/>}/>
      <Route path='/user/participate' element={<ParticipateU/>}/>

    </Routes>
  );
}

export default App;
