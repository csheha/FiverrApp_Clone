
import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

const message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque maxime deleniti, iure laudantium hic repellendus ullam numquam, ab explicabo, corrupti expedita odit exercitationem. Ipsa saepe dolorum minima quam nemo."

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr >
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>

          <tr className="active">
            <td>John Doe</td>
            <td><Link to="/message/123" classname="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td><button>Mark as Read</button>
            </td>
          </tr>
          
          <tr className="active" >
            <td>John Doe</td>
            <td><Link to="/message/123" classname="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td><button>Mark as Read</button>
            </td>
          </tr>
          
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" classname="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
           
          </tr>
          
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" classname="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            
          </tr>
          
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" classname="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            
          </tr>
          
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" classname="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            
          </tr>

        </table>
      </div>
    </div>
  );
};

export default Messages;
