import React, { useState, useEffect } from "react";
import OptionTypeEnum from "../../types/OptionTypeEnum";
import UserFeedback from "../user-feedback/UserFeedback";
import BotFaq from "../bot-faq/BotFaq";
import BotEditors from '../bot-editors/BotEditors'

const BotMultiple = ({ messages, sendMessage, userMessage }) => {
  const [optionType, setOptionType] = useState(undefined);

  const textMessages = messages.filter((obj) => {
    return obj.response_type === "text";
  });

  const optionsMessages = messages.filter((obj) => {
    return obj.response_type === "option";
  });

  const optionsMessagesFlatten =
    Array.isArray(optionsMessages) && optionsMessages.length >= 1
      ? optionsMessages[0].options
      : null;


      const onlyLabels = optionsMessagesFlatten
        ? optionsMessagesFlatten.map((option) => option.label)
        : null;


  useEffect(() => {
    const userFeedbackLabels = ["YES", "NO", "SKIP"];
    const codeEditorLabels = ["CODE-EDITOR", "VISUAL-EDITOR", "SKIP"];

    const containsAll = (target) =>
      target.every((element) => {
        return onlyLabels.includes(element);
      });

    if (onlyLabels && containsAll(userFeedbackLabels)) {
      setOptionType(OptionTypeEnum.FEEDBACK)
    } else if (onlyLabels && containsAll(codeEditorLabels)) {
      setOptionType(OptionTypeEnum.EDITOR)
    } else {
      setOptionType(OptionTypeEnum.SUGGESTIONS)
    }
  }, [onlyLabels]);

  const getOptionsContainer = () => {
    switch (optionType) {
      case OptionTypeEnum.FEEDBACK:
        return (
          <UserFeedback
            textMessages={textMessages}
            labels={onlyLabels}
            sendMessage={sendMessage}
          />
        );
      case OptionTypeEnum.SUGGESTIONS:
        return (
          <BotFaq
            faqArray={onlyLabels}
            textMessages={textMessages}
            userMessage={userMessage}
            sendMessage={sendMessage}
          />
        );
      case OptionTypeEnum.EDITOR:
        return (
          <BotEditors
            textMessages={textMessages}
            labels={onlyLabels}
            sendMessage={sendMessage}
          />
        );
      default:
        return null;
    }
  };

  return <>{getOptionsContainer()}</>;
};

export default BotMultiple;
