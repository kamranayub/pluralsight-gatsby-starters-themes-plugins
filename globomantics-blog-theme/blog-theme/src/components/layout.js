import React from "react";
import "./base.css";
import Container from "./container";
import Header from "./header";
import Footer from "./footer";

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </>
    );
  }
}

export default Template;
