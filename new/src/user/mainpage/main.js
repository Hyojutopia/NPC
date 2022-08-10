import './main.css';
import AD from '../adver/ad';
import { Link } from 'react-router-dom';


function Main(){
    return(
        <div>
            <AD/>
            <div className='middle'>
                <Link to="/user/howtouse"><div className='but'>사용법</div></Link>
                <div className='blank'></div>
                <Link to="/user/login"><div className='but'>방생성</div></Link>
                <Link to="/user/home"><div className='name'>Why Talk</div></Link>
                <div className='code'>
                    <input className='roomcode'/>
                    <Link to="/user/compain"><div className='but'>참가</div></Link>
                </div>
            </div>
            <AD/>
        </div>
    );
};

export default Main;