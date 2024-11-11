import { cva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";
import React from "react";

const cardRecipe = cva({
  base: {
    display: "flex",
    gap: "0.5em",
    p: "1.5em",
    m: "0.5rem",
    rounded: "1em",
    w: "fit-content",
  },
  variants: {
    variant: {
      flatWhite: {
        bgColor: "white",
      },
      shadowedGrey: {
        shadow: "0em 0em 0.2em lightGrey",
      },
    },
  },
});

interface CardProps {
  children: React.ReactNode;
  variant?: "flatWhite" | "shadowedGrey";
  isSelected?: boolean;
}

const Card = (props: CardProps) => {
  return (
    <styled.div
      className={cardRecipe({
        variant: props.variant,
      })}
    >
      {props.children}
    </styled.div>
  );
};

export default Card;
