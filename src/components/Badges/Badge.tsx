import React from "react";
import { styled } from "../../../styled-system/jsx";
import { cva } from "../../../styled-system/css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { AccessTimeOutlined, HighlightOffOutlined } from "@mui/icons-material";

const badgeRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "",
    gap:'0.5em',
    p: "0.2em 1em 0.2em 1em",
    rounded: "2em",
    fontSize: "x-small",
  },
  variants: {
    type: {
      accepted: {
        bgColor: "#82BD6450",
        color: "statusGreen",
      },
      refused: {
        bgColor: "#F03D3E50",
        color: "statusRed",
      },
      pending: {
        bgColor: "#E58D4F50",
        color: "statusOrange",
      },
      neutral: {
        bgColor: "lightBlue",
        color: "smoked",
      },
      selectable: {
        border: "1px solid",
        color: 'mainOrange',
      },
    },
  },
  defaultVariants: {
    type: "neutral",
  },
});

interface BadgeProps {
  children?: React.ReactNode;
  title?: string;
  selectable?: boolean;
  type?:
    | "accepted"
    | "pending"
    | "refused"
    | "neutral"
    | "selectable"
    | undefined;
  color?: string;
}

const Badge = (props: BadgeProps) => {



  return (
    <styled.p className={badgeRecipe({ type: props.type })}>
      {props.type == "accepted" ? (
        <CheckCircleOutlineIcon style={{fontSize: '10px'}}/>
      ) : props.type == "pending" ? (
        <AccessTimeOutlined style={{fontSize: '10px'}}/>
      ) : props.type =='refused' && (
        <HighlightOffOutlined style={{fontSize: '10px'}}/>
      )}

      <p>{props.title}</p>
    </styled.p>
  );
};

export default Badge;
