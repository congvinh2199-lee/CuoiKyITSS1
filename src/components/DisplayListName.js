import React from "react";
function DisplayListName(props) {
    return (
        <span style={{    fontWeight: "bold"}}>[
            {props.listName && 
                props.listName.map((name, id) =>
                    <span>
                        <span key={id + name}>{name}
                            {id !== (props.listName.length - 1) ? ", " : ""}
                        </span>
                    </span>
                )
            }
            ]
        </span>
    );
}
export default DisplayListName;