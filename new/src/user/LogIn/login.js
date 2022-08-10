import { Link } from 'react-router-dom';
import AD from '../adver/ad';
import './login.css';


function LogInU(){
    return(
        <div>
            <AD/>
            <div className='middle'>
                <div>
                    <div className='box'>
                        <div className='idpw'>
                            <input className='inputidpw'/>
                            <input className='inputidpw'/>
                        </div>
                        <Link to="/user/loginmenu/"><div className='logbut'>로그인</div></Link>
                    </div>

                    <div className='find'>
                        <Link to="/user/findid/"><div className='but2'>아이디 찾기</div></Link>
                        <Link to="/user/findpw/"><div className='but2'>비밀번호 찾기</div></Link>
                        <Link to="/user/makeid/"><div className='but2'>회원가입</div></Link>
                    </div>
                </div>
            </div>
            <AD/>
        </div>
    );
};

export default LogInU;