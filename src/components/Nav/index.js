import React from "react";
import { withRouter } from "react-router-dom";
const Nav = ({ history }) => {
  console.log(history);
  return (
    <nav>
      <div className="wrapper">
        <div className="nav">
          <div
            onClick={() => history.goBack()}
            className={`back ${
              history.location.pathname === "/info" && "visible"
            }`}
          >
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </div>
          <a href="/">CATManual</a>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Nav);
