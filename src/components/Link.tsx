import { styled } from "../../styled-system/jsx";
import { cva, css } from "../../styled-system/css";
import { hstack } from "../../styled-system/patterns";
import LinkIcon from "@mui/icons-material/Link";

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
        color: "orange",
      },
      secondary: {
        color: "blue",
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
    <section
      className={hstack({
        m: "2rem",
        p: "2em",
        shadow: "0em 0em 0.5em 0em lightGrey",
        borderColor: "white",
        rounded: "1em",
        w: "fit-content",
        gap: '1em'
      })}
    >
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
        className={css({ bgColor: 'black', p: '0 0.5rem', rounded: '0.5em' })}
      >
        <LinkIcon />
        <p>Link</p>
      </Link>
    </section>
  );
}

export default LinkExample;
