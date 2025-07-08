import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from './../constants/routes';

const Product = ({ model, id }) => {
  return (
    <Link to={`${ROUTES.SINGLE_ITEM}/${id}`} className="link">
      {model}
    </Link>
  );
};

export default Product;
