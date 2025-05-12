import React from "react";

type MessageProps = {
  text: string;
};

const Message: React.FC<MessageProps> = React.memo(({ text }) => {
  console.log("🔁 Message component rendered");
  return <h2>შეტყობინება: {text}</h2>;
});

export default Message;
