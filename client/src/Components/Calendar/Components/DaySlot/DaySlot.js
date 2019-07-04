import React from "react";

function DaySlot({ classToUse, data, children }) {
  return (
    <div className={classToUse}>
      <span className="dayNumber">{data}</span>
      {children}
    </div>
  );
}

export default DaySlot;
