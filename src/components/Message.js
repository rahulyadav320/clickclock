import React from 'react';

export default function Message(props) {
  return (
    <div className="content">
      {props.data.map((ele) => {
        return (
          <div className="message" key={props.data.indexOf(ele)}>
            {ele}
          </div>
        );
      })}
    </div>
  );
}
