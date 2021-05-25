import React from "react";
import Aux from "../../HOC/Auxe";
import DetailsCss from "./Details.module.css";

const details = (props) => {
  return props.list.map((list, id) => {
    return (
      <Aux>
        <div key={id} style={{ maxWidth: 540 }} className={DetailsCss.Details}>
          <div className="row no-gutters">
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">Details Header</h4>
                
                <h5 className="card-title">{list.newInput}</h5>
                <p className="card-text">
                  <small >Price: <strong>{list.newPrice} /-</strong></small>
                </p>
                <p className="card-text">{list.newDesc}</p>
              </div>
            </div>
            <div className="col-md-2">
              <img src={list.newImage} className="card-img" alt="..." />
             
            </div>
            <button onClick={() => props.remove(list.newInput)} >X</button>
          </div>
        </div>
      </Aux>
    );
  });
};

export default details;
