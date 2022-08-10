import { Link } from "react-router-dom";
import AD from "../adver/ad";
import './pastQustionU.css';

function QustionU(){
    return (
        <div>
            <AD/>
            <div className="middle">
                <div className="Qelsebox">
                    <div className="calander">달력</div>
                    <Link to="/user/loginmenu"><div className="but Qback">이전페이지</div></Link>
                </div>
                <div className="questionbox">
                    <div className="questiondate">날짜</div>
                    <div className="question">질문</div>
                </div>
            </div>
            <AD/>
        </div>
    )
}

export default QustionU;