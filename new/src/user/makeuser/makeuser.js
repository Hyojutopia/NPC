import { Link } from 'react-router-dom';
import AD from '../adver/ad';
import "./makeuser.css";


function MakeUser(){
    return(
        <div>
            <AD/>
            <div className='middle'>
                <div className='makeuserstyle'>
                    <div className='makeusertitle'>회원 가입</div>
                    <div className='makeuserbox'>
                        <input className='makeuserinfo' placeholder='name'/>
                        <input className='makeuserinfo' placeholder='email' type={"email"}/>
                        <input className='makeuserinfo' placeholder='id'/>
                        <input className='makeuserinfo' placeholder='password'/>
                    </div>
                    <Link to="/user/login"><button className='but makeuserbut' type={"submit"}>회원가입</button></Link>
                </div>
            </div>
            <AD/>
        </div>
    )
};

export default MakeUser;