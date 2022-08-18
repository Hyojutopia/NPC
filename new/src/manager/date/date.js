import { Link } from "react-router-dom";
import './date.css';

// Example of a data array that
// you might receive from an API
const data = [
    { 이름: "Anom", 날짜: 2021_0101_1234, 내용: "표구현하기 어렵다" },
    { 이름: "Megha", 날짜: 2022_0101_1234, 내용: "구글링해서 따왔어여" },
    { 이름: "Subham", 날짜: 2023_0101_1234, 내용: "앞으로 할 일 데이터 가져와서 표 만들고 검색기능 구현하기, 오름차순 내림차순 구현하기 / 어디까지 길어지는지 실험 "},
  ]

function DateM() {
    return (
        <div>
            <div class="right_d">
                <p><Link to="/manager/name"><input className="transbutton_d" type="button" value="이름순" /></Link></p>
                <p><Link to="/manager/trash"><input className="trashbutton_d" type="button" value="휴지통" /></Link></p>
                <p><Link to="/manager/login"><input className="logoutbutton_d" type="button" value="로그아웃" /></Link></p>
            </div>


            <div class="search_d">

                <p><input className="inputtext_d" type="text" /></p>
                <input className="searchbutton_d" type="submit" value="검색" />

            </div>
            <div className="App_d">
                <table>
                    <tr>
                        <th>날짜</th>
                        <th>이름</th>
                        <th>내용</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.날짜}</td>
                                <td>{val.이름}</td>
                                <td>{val.내용}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
};

export default DateM;