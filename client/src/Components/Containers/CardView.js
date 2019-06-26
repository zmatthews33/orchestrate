import React from "react";

const CardView = ({ color, children }) => (
  <div className={`cardView ${color}`}>{children}</div>
);

export default CardView;
