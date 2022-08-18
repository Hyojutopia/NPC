import { Link } from "react-router-dom";
import './home.css';

function HomeM() {
    return (
        <div>
            <div className="center">
                <p><Link to="/manager/name"><input className="namelist" type="button" value="이름 순 보기"/></Link></p>
                <p><Link to="/manager/date"><input className="datelist" type="button" value="날짜 순 보기"/></Link></p>
                <p><Link to="/manager/trash"><input className="trash" type="button" value="휴지통"/></Link></p>
            </div>
            <div className="logoutbox">
                <p><Link to="/manager/login"><input className="logoutbutton" type="button" value="로그아웃"/></Link></p>
            </div>
        </div>
    )
};

export default HomeM