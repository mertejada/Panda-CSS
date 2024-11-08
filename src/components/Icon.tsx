import { cva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";
import { hstack } from "../../styled-system/patterns";
import { VerifiedUserOutlined } from "@mui/icons-material";
import Card from "./Card";

const iconStyles = cva({
  base: {
    p: "0.5em",
    rounded: "5em",
  },
  variants: {
    variant: {
      primary: {
        color: "mainOrange",
      },
      secondary: {
        bg: "mainOrange",
        color: "white",
      },
      white: {
        color: "white",
      },
      grey: {
        bgColor: "grey",
        color: "smoked",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Icon = styled("div", iconStyles);

const IconExample = () => {
  return (
    <div className={hstack({})}>
      <Card>
        <Icon variant="primary">
          <VerifiedUserOutlined />
        </Icon>
        <Icon variant="secondary">
          <VerifiedUserOutlined />
        </Icon>
        <Icon variant="grey">
          <VerifiedUserOutlined />
        </Icon>
      </Card>
      <Card bgColor='mediumBlue'>
        <Icon variant="white">
          <VerifiedUserOutlined />
        </Icon>
      </Card>
    </div>
  );
};
export default IconExample;
