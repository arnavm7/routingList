import React from "react";
import {useNavigate} from "react-router-dom";

const TodoCard  = (props) => {
    const { todo } = props;
    const { id, title, completed } = todo; 
    let navigate = useNavigate();
    
    return (
        <div style={{ backgroundColor: "lightblue", margin: "10px", padding: "10px", width: "150px"}}
        onClick= {() => navigate(`/todo/${id}`)}
        >
            <h4> {title} </h4>
            <h6>{`Completed: ${completed}`}</h6>
        </div>
    );
}

export default TodoCard;