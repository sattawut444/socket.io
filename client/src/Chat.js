// import React, { useState } from "react";

// function Chat({ socket, username, room }) {
//     const [currentMessage, setCurrentMessage] = useState("");
//     console.log(currentMessage)
//     const sendMessage = async () => {
//         if (currentMessage !== "") {
//           const messageData = {
//             room: room,
//             author: username,
//             message: currentMessage,
//             time:
//               new Date(Date.now()).getHours() +
//               ":" +
//               new Date(Date.now()).getMinutes(),
//           };
    
//           await socket.emit("send_message", messageData);
//         }
//     }
//     return (
//         <div>
//             <div className="chat-header">
//             </div>
//                 <p>Live Chat</p>
//             <div className="chat-body">
//             </div>
//             <div className="chat-footer">
//             <input type="text" value={currentMessage} placeholder="Hey..." onChange={(event) => {
//                     setCurrentMessage(event.target.value);
//                   }}
//                 />
//                 <button onClick={sendMessage}>&#9658;</button>
//             </div>
//         </div>
//     )
    
// }

// export default Chat