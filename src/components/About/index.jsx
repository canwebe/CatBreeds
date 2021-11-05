import React from "react";
import "./About.css";

const About = ({
  history: {
    location: { state },
  },
}) => (
  <div className="wrapper">
    <div className="about">
      {state && (
        <div className="container Wrapper">
          <img src={state.url} alt="fullimg" className="Wrapper" />
          <div className="content">
            <h2>{state.name}</h2>
            <p className="para">
              <b>Origin:</b>
              {state.org}
              {"   "}
              <b>Life_span:</b>
              {state.life}
              {"   "}
              <b>Dog_friendly:</b>
              {state.friendly}
              {"   "}
              <b>Child_friendly:</b>
              {state.child_frd}
              {"   "}
              <b>Energy_Level:</b>
              {state.Energy}
              {"   "}
              <b>Intelligence:</b>
              {state.intell}
              {"   "}
              <b>Temperament:</b>
              {"  "}
              {state.temper}
            </p>
            <p className="desc para">
              <b>Description:</b>
              {state.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default About;
