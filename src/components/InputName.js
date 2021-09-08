import React, { useState } from "react";
function InputName(props){
    let [inputedName, setInputedName] = useState("");

    let commitName = () => {
        if(commitName === ""){
            alert("Vui long nhap ten!")
            return
        }
        props.addToStudentList(inputedName);
    }
    return(
        <>
        < input style={{marginLeft:"20px", marginTop:"10px"}} type="text" value={inputedName} onChange={(e) => setInputedName(e.target.value)} ></input>
        <div style={{marginLeft:"150px", marginTop:"10px"}} ><button onClick={() => commitName()}> Chu trong button</button></div>
        </>
    )
}
export default InputName;