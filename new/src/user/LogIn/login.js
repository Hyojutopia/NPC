import { Link } from 'react-router-dom';

function LogIn(){
    return(
        <div>
            <div>
                <div className=''>
                    <Link to="/home">홈</Link>
                </div>
                <div className=''>
                <Link to="/login">로그인</Link>
                </div>
            </div>
            <div>
                <input/>
                <input/>
                <button>로그인</button>
            </div>
        </div>
    );
};

export default LogIn;