import React, { Component } from "react";
// import styles from "../Gaushala/Gaushala.module.css"

import PageTitle from "../../components/PageTitle/PageTitle";
import CarouselCardsList from "../../components/CarouselCardsList/CarouselCardsList";

class Gaushala extends Component {
  render() {
    return (
      <div className="Gaushala">
        <PageTitle title="GAUSHALA"/>
        <CarouselCardsList />
      </div>
    );
  }
}

export default Gaushala;
