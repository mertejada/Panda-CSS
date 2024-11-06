import { cva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";
import { vstack, hstack } from "../../styled-system/patterns";
import FavoriteIcon from "@mui/icons-material/Favorite";

const button = cva({
  base: {
    w: "fit-content",
    p: "0.5em 1em",
    rounded: "2em",
    display: "flex",
    justifyContent: "stretch",
    gap: "0.5rem",
    transition: "all 0.1s ease",
    _enabled: {
      cursor: "pointer",
      _hover: {
        transform: "scale(1.05)",
      },
      _active: {
        transform: "scale(1)",
      },
    },
    _disabled: {
      opacity: 0.4,
    },
  },
  variants: {
    variant: {
      primary: {
        bgColor: "orange",
        color: "white",
        shadow: "0em 0em 0.05em 0.01em lightGrey",
      },
      secondary: {
        //border: '1px solid', borderColor: 'orange',
        bgColor: "white",
        color: "orange",
        shadow: "0em 0em 0.2em 0em lightGrey",
      },
      tertiary: {
        color: "orange",
        p: "0.5em",
      },
    },
    icon: {
      icon: {
        padding: "0.5em",
      },
    },
  },
});

const Button = styled("button", button);

const ButtonExample = () => {
  return (
    <section
      className={vstack({
        m: "2rem",
        p: "2em",
        shadow: "0em 0em 0.5em 0em lightGrey",
        borderColor: "white",
        rounded: "1em",
        w: "fit-content",
      })}
    >
      <div className={hstack()}>
        <div className={vstack()}>
          <Button variant="primary">Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="tertiary">Button</Button>
        </div>
        <div className={vstack()}>
          <Button variant="primary" disabled>
            Button
          </Button>
          <Button variant="secondary" disabled>
            Button
          </Button>
          <Button variant="tertiary" disabled>
            Button
          </Button>
        </div>
        <div className={vstack()}>
          <Button variant="primary">
            <FavoriteIcon />
            <p>Button</p>
          </Button>
          <Button variant="secondary">
            <FavoriteIcon />
            <p>Button</p>
          </Button>
          <Button variant="tertiary">
            <FavoriteIcon />
            <p>Button</p>
          </Button>
        </div>
        <div className={vstack()}>
          <Button variant="primary" icon="icon">
            <FavoriteIcon />
          </Button>
          <Button variant="secondary" icon="icon">
            <FavoriteIcon />
          </Button>
          <Button variant="tertiary" icon="icon">
            <FavoriteIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ButtonExample;
