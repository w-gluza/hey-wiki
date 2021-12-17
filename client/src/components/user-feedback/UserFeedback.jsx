import React from "react";

const UserFeedback = ({ optionsMessagesFlatten }) => {
  return (
    <div>
      {optionsMessagesFlatten.map((option) => (
        <button type="button" onClick={()=>console.log(option.option)}>{option.label}</button>
      ))}
    </div>
  );
};

export default UserFeedback;
