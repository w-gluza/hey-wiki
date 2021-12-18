import React from "react";
import Icon from '../../assets/icons';

const UserFeedback = ({ optionsMessagesFlatten }) => {
  return (
    <div>
      {optionsMessagesFlatten.map((option) => (
        <button className="feedback-button" type="button" onClick={()=>console.log(option.option)}>
          <Icon name="Positive" alt="" />
        </button>
      ))}
    </div>
  );
};

export default UserFeedback;
