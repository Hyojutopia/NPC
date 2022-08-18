import { Link } from "react-router-dom";
import './trash.css';

const data = [
    { 이름: "Anom", 날짜: 2021_0101_1234, 내용: "표구현하기 어렵다" },
    { 이름: "Megha", 날짜: 2022_0101_1234, 내용: "이름 순 날짜 순, 체크박스 구현할 수 있을까?" },
    { 이름: "Subham", 날짜: 2023_0101_1234, 내용: "앞으로 할 일 데이터 가져와서 표 만들고 검색기능 구현하기 / 어디까지 길어지는지 실험 여기까지도 길어질 수 있을까" },
]

function TrashM() {
    return (
        <div>
            <div class="right_t">
                <p><Link to="/manager/home"><input className="homebutton_t" type="button" value="홈화면" /></Link></p>
                <p><Link to="/manager/login"><input className="logoutbutton_t" type="button" value="로그아웃" /></Link></p>
            </div>

            <form action="">
                <div class="search_t">

                    <p><input className="inputtext_t" type="text" /></p>
                    <input className="searchbutton_t" type="submit" value="검색" />

                </div>
            </form>
            <div className="datename_t">
                <input className="datetrans_t" type="button" value="날짜순"/>
                <input className="nametrans_t" type="button" value="이름순"/>
            </div>
            <div className="App_t">
                <table>
                    <tr>
                        <th>이름</th>
                        <th>날짜</th>
                        <th>내용</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.이름}</td>
                                <td>{val.날짜}</td>
                                <td>{val.내용}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
};

export default TrashM;