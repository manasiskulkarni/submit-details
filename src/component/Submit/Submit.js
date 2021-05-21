import React from "react";
import SubmitCss from "./Submit.module.css";
import Aux from "../../HOC/Auxe";
import PropTypes from "prop-types";

const submit = (props) => {
  return (
    <Aux>
      <div className={SubmitCss.Modal}>
        <h4 >Submit Header</h4>
        <label >Name</label>
        <br />
        <input
          type="text"
          value={props.input}
          onChange={props.changed}
          className={SubmitCss.input}
        />
        <br />
        <label >ImageUrl</label>
        <br />
        <input
          type="text"
          value={props.image}
          onChange={props.changedUrl}
          className={SubmitCss.input}
        />
        <br />
        <label >Quantity</label>
        <p>10 Rs for 1 kg</p>
        <input
          type="text"
          value={props.price}
          onChange={props.changedPrice}
          className={SubmitCss.input}
        />
        <br />
        <label >Description</label>
        <br />
        <textarea
          type="text"
          value={props.desc}
          onChange={props.changedDesc}
          className={SubmitCss.textarea}
        />
        <br />
        <button
          onClick={props.submit}
          disabled={props.disable}
         
        >
          Submit
        </button>
      </div>
    </Aux>
  );
};

submit.propTypes = {
  price: PropTypes.number.isRequired
};

export default submit;
