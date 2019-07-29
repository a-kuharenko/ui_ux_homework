import React from 'react';
import './card.css'

function Card(props){
    return (
        <div className="card">
            <div className="date">
                <img src="https://cdn1.iconfinder.com/data/icons/university-set-1/512/6-512.png"/>
                <span>
                    29.08.2019
                </span>
                <div className="state">
                    <span className={props.status}>{props.status}</span>
                </div>
            </div>
            <hr/>
            <div className="time">
                <img src="https://cdn1.iconfinder.com/data/icons/user-interface-basics/512/BI_054_clock-512.png"/>
                <span>12:00 - 15:00 AM (GMT)</span>
            </div>
            <div className="company">
                <img src="http://cdn.onlinewebfonts.com/svg/img_391838.png"/>
                <span>Binary Studio Academy 2019</span>
            </div>
            <div className="skills">
                <ul aria-label="Required skills:">
                    <li>English</li>
                    <li>Operation Room</li>
                    <li>RN</li>
                </ul>
            </div>
            <div className="users_count">
                <img src="https://image.flaticon.com/icons/svg/74/74577.svg"/>
                <span>23</span>
                <img className="user" src="https://png.pngtree.com/svg/20160919/98c1cbe49d.svg"/>
                <span>Ivan Ivanov</span>
                <span className="tooltiptext">(first accepted the application)</span>
            </div>
            <hr/>
            <div className="footer">
                <span className="date_of_creating">10 minutes ago</span>
                <span className="author">by Aleksandr Kukharenko</span>
            </div>
        </div>
    )
}

export default Card;