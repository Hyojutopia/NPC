import { Link } from "react-router-dom";
import AD from "../adver/ad";
import './id.css';

function FindPwU(){
    return(
        <div>
            <AD/>
            <div className="middle">
                <Link to="/user/home"><div className='mainname'>Why Talk</div></Link>
                <div className='box'>
                    <div className='idpw'>
                        <input className='inputidpw'/>
                        <input className='inputidpw'/>
                    </div>
                    <div className="infoid">
                        <div className="name">아이디</div>
                        <div className="name">이메일</div>
                    </div>
                </div>
                <Link to="/user/login"><div className='butidfind'>비밀번호 찾기</div></Link>
                
            </div>
            <AD/>
        </div>
    );
}

export default FindPwU;