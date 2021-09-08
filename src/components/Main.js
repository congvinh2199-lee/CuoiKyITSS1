import React, { useState } from 'react';
import DisplayListName from './DisplayListName';
import InputName from './InputName';

let initListName = ["Huyen", "Hoa", "Hung", "Long"];

function Main() {
    let [studentList, setStudentList ] = useState(initListName);
    let [inputedName, setInputedName] = useState("");
    let addToStudentList = (name) => {
        setInputedName(name);
        setStudentList((currentList) => {
            return [...currentList, name];
        })
    }
    return (
        <div style={ {marginLeft: "100px", marginTop: "50px"}}>
            <div >
                Danh sach ban dau: <DisplayListName style={{display : 'inline-block'}}  listName={initListName}></DisplayListName>
            </div>
            <div >Chu cc gi do tieng nhat</div>
            <InputName style={{marginLeft:"20px"}} addToStudentList={addToStudentList}></InputName>
            <div>
                Ten moi nhap: {inputedName}
            </div>
            <div style={{display : 'inline-block'}}>
                Danh sach moi: <DisplayListName listName= {studentList}></DisplayListName>
            </div>
        </div>
    )

}
export default Main;