import React from "react";

const ListView = ({ color, children }) => (
  <div className={`listView ${color}`}>{children}</div>
);

export default ListView;
