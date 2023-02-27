import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container">
      <div className="text-center">
        <p className="cartEmptyText">Page Not Found.</p>
        <p className="cartAddText">Page you are looking does not exists</p>
        <div>
          <Link to="/dashboard">
            <button className="food--cardAdd food--cardAddShopNow">
              Go to Home Screen
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
