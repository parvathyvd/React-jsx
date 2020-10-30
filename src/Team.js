import React from 'react';
import faker from 'faker';

const Team = (props) => {
    console.log(props)
        return(
            <div className="comment">
              <a className="avatar">
                <img src={faker.image.avatar()}/>
              </a>
              <div className="content">
                <a className="author">{props.author}</a>
                <div className="metadata">
                  <span className="date">Today at 5:42PM</span>
                </div>
                <div className="text">
                  {props.desc}
                </div>
                <div className="actions">
                  <a className="reply">Reply</a>
                </div>
              </div>
            </div>
                )
}
  

export default Team;