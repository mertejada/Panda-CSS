import { styled } from "../../styled-system/jsx";
import { cva, css } from "../../styled-system/css";
import LinkIcon from "@mui/icons-material/Link";
import Card from "./Card";

const link = cva({
  base: {
    w: "fit-content",
    display: "flex",
    justifyContent: "stretch",
    gap: "0.5rem",
    cursor: "pointer",
    transition: "all 0.1s ease",
    _hover: {
      transform: "scale(1.05)",
    },
    _active: {
      transform: "scale(1)",
    },
  },
  variants: {
    variant: {
      primary: {
        color: "mainOrange",
      },
      secondary: {
        color: "mainBlue",
      },
      grey: {
        color: "grey",
      },
      white: {
        color: "white",
      },
    },
  },
  defaultVariants: { variant: "primary" },
});

const Link = styled("a", link);

function LinkExample() {
  return (
    <Card>
      <Link>
        <LinkIcon />
        <p>Link</p>
      </Link>
      <Link variant="secondary">
        <LinkIcon />
        <p>Link</p>
      </Link>
      <Link variant="grey">
        <LinkIcon />
        <p>Link</p>
      </Link>
      <Link
        variant="white"
        className={css({ bgColor: "black", p: "0 0.5rem", rounded: "0.5em" })}
      >
        <LinkIcon />
        <p>Link</p>
      </Link>
    </Card>
  );
}

export default LinkExample;
