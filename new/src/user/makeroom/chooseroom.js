import { Link } from "react-router-dom";
import AD from "../adver/ad";

function ChooseRoomU(){
    return(
        <div>
            <AD/>
            <div className="middle">
                <div className="menubox">
                    <Link to="/user/makeroom/choose"><div className="butmenu">선택해서 질문 확인</div></Link>
                    <Link to="/user/makeroom/random"><div className="butmenu">랜덤으로 질문 확인</div></Link>
                </div>
            </div>
            <AD/>
        </div>
    )
};

export default ChooseRoomU;