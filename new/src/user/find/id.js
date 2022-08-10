import AD from "../adver/ad";

function FindID(){
    return(
        <div>
            <AD/>
            <div className="middle">
                <div>이름 : <input/></div>
                <div>이름 : <input/></div>
            </div>
            <AD/>
        </div>
    );
}

export default FindID;