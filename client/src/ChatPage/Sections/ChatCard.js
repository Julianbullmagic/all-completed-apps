import React from "react";
import moment from 'moment';

function ChatCard(props) {
    return (
        <div style={{ width: '100%',background:"#e0e8e6",padding:"10px",overflow:"auto",marginTop:"0.5vh",marginBottom:"0.5vh",marginLeft:"0.5vw",marginRight:"0.5vw" }}>
        {(props.sender&&props.message)&&<p style={{marginTop:"0.5vh",marginBottom:"0.5vh",marginLeft:"0.5vw",marginRight:"0.5vw" }}><strong>{props.sender.name}:</strong> {props.message}</p>}
        {(props.message&&!props.sender)&&<p style={{marginTop:"0.5vh",marginBottom:"0.5vh",marginLeft:"0.5vw",marginRight:"0.5vw" }}>{props.message}</p>}

        </div>
    )
}

export default ChatCard;
