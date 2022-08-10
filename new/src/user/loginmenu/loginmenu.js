import { Link } from "react-router-dom";
import AD from "../adver/ad";
import "./loginmenu.css"

function LoginMenuU(){
    return(
        <div>
            <AD/>
            <div className="middle">
                <Link to="/user/home"><div className="delbox">탈퇴...ㅠ</div></Link>
                <div className="menubox">
                    <Link to="/user/makeroom"><div className="butmenu">방 생성</div></Link>
                    <Link to="/user/pastQustion"><div className="butmenu">과거에 받은 질문 목록</div></Link>
                    <div className="butmenu">방번호 재설정</div>
                </div>
            </div>
            <AD/>
        </div>
    )
};

export default LoginMenuU;