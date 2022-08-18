import { Link } from "react-router-dom";
import './login.css';

function LoginM() {
    return (
        <div>
            <div className="center">
                <div><label>ID </label><input className="id" type="text" name="id" /></div>
                <p><div><label>PW </label><input className="pw" type="password" name="password"/></div></p>

            </div>
            <div className="submit">
                <p> <Link to="/manager/home">
                    <input className="login" type="submit" value="로그인"/>
                </Link> </p>
            </div>
        </div>
    )
};

export default LoginM;