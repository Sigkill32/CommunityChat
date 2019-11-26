import React from "react";

const ColorPicker = ({ bgValue, fgValue, onHandleChange }) => {
  return (
    <div>
      <input type="text" name="bg" value={bgValue} onChange={onHandleChange} />
      <input type="text" name="fg" value={fgValue} onChange={onHandleChange} />
    </div>
  );
};

export default ColorPicker;
