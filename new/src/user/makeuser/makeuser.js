import AD from '../adver/ad';


function MakeUser(){
    return(
        <div>
            <AD/>
            <div className='middle'>
                <div>약관</div>
                <div>이름</div>
                <input/>
                <div>아이디</div>
                <input/>
                <div>비밀번호</div>
                <input/>
                <div>회원가입</div>
            </div>
            <AD/>
        </div>
    )
};

export default MakeUser;