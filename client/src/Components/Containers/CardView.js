import React from "react";
import './CardView.scss';

const CardView = ({ color, children }) => (
  <div className={`cardView ${color}`}>{children}</div>
);

export default CardView;
