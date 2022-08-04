import { Link } from 'react-router-dom';
import './main.css';

function Main(){
    return(
        <div>
            <div className='button'>
                <Link to="/home">홈</Link>
            </div>
            <div className='button'>
            <Link to="/login">로그인</Link>
            </div>
        </div>
    );
};

export default Main;