import React, { Component } from "react";
import Aux from "../../HOC/Auxe";
import { Col, Row } from "react-bootstrap";
import LayoutCss from "./Layout.module.css";
import Submit from "../../component/Submit/Submit";
import Details from "../../component/Details/Details";

class Layout extends Component {
  state = {
    list: [],
    input: "",
    image: "",
    price: "",
    desc: "",
  };

  changed = (eve) => {
    this.setState({ input: eve.target.value });
  };

  changedUrl = (eve) => {
    this.setState({ image: eve.target.value });
  };

  changedPrice = (eve) => {
    this.setState({ price: eve.target.value });
  };

  changedDesc = (eve) => {
    this.setState({ desc: eve.target.value });
  };

  submit = () => {
    const newSubmit = {
      newInput: this.state.input,
      newImage: this.state.image,
      newPrice: this.state.price * 10,
      newDesc: this.state.desc,
    };
    const newList = this.state.list;
    newList.push(newSubmit);
    this.setState({ list: newList, input: "", image: "", price: "", desc: "" });
  };

  remove = (event) => {
    let removeList = this.state.list;
    removeList = removeList.filter((list) => list.newInput !== event);
    this.setState({ list: removeList });
  };

  render() {
    return (
      <Aux>
        <Row className={LayoutCss.LayoutRow}>
          <Col className={LayoutCss.LayoutCol1}>
            <Submit
              input={this.state.input}
              image={this.state.image}
              price={this.state.price}
              desc={this.state.desc}
              changed={this.changed}
              changedUrl={this.changedUrl}
              changedPrice={this.changedPrice}
              changedDesc={this.changedDesc}
              submit={this.submit}
              disable={
                this.state.input < 1 ||
                this.state.image < 1 ||
                this.state.price < 1 ||
                this.state.desc < 1
              }
            />
          </Col>
          <Col className={LayoutCss.LayoutCol2}>
            <Details list={this.state.list} remove={this.remove} />
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default Layout;
