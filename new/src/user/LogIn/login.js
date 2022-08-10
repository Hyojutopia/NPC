import { Link } from 'react-router-dom';
import AD from '../adver/ad';
import './login.css';


function LogIn(){
    return(
        <div>
            <AD/>
            <div className='middle'>
                <div>
                    <div className='box'>
                        <div className='idpw'>
                            <input/>
                            <input/>
                        </div>
                        <Link to="/user/makeroom/"><div className='logbut'>로그인</div></Link>
                    </div>

                    <div className='find'>
                        <Link to="/user/findid/"><div className='but'>아이디 찾기</div></Link>
                        <Link to="/user/findpw/"><div className='but'>비밀번호 찾기</div></Link>
                        <Link to="/user/makeid/"><div className='but'>회원가입</div></Link>
                    </div>
                </div>
            </div>
            <AD/>
        </div>
    );
};

export default LogIn;