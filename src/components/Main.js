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
                リスト: <DisplayListName style={{display : 'inline-block'}}  listName={initListName}></DisplayListName>
            </div>
            <div >リスト</div>
            <InputName style={{marginLeft:"20px"}} addToStudentList={addToStudentList}></InputName>
            <div>
                入力: {inputedName}
            </div>
            <div style={{display : 'inline-block'}}>
                新しいリスト: <DisplayListName listName= {studentList}></DisplayListName>
            </div>
        </div>
    )

}
export default Main;
