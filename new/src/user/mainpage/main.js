import './main.css';
import AD from '../adver/ad';
import { Link } from 'react-router-dom';


function MainU(){
    return(
        <div>
            <AD/>
            <div className='middle'>
                <Link to="/user/howtouse"><div className='but1'>사용법</div></Link>
                <div className='blank'></div>
                <Link to="/user/login"><div className='but1'>방생성</div></Link>
                <Link to="/user/home"><div className='mainname'>Why Talk</div></Link>
                <div className='code'>
                    <input className='roomcode'/>
                    <Link to="/user/compain"><div className='but1'>참가</div></Link>
                </div>
            </div>
            <AD/>
        </div>
    );
};

export default MainU;