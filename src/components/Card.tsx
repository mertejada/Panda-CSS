import { styled } from "../../styled-system/jsx";
import { wrap } from "../../styled-system/patterns";
import React from "react";

// Type for props of the styled `div` element
type CardProps = React.ComponentProps<typeof styled.div>;

const Card: React.FC<CardProps> = (props) => {
  return (
    <styled.div
      className={wrap({
        shadow: "0em 0em 0.2em lightGrey",
        p: "1.5em",
        m: "0.5rem",
        rounded: "1em",
        w: "fit-content",
      })}
      px="4"
      py="3"
      {...props}
    />
  );
};

export default Card;
