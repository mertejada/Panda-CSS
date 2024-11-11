import { cva } from "../../../styled-system/css";
import { styled } from "../../../styled-system/jsx";

const tabRecipe = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap:'0.2em',
    color: 'lightGrey',
  },
  variants: {
    isSelected: {
      true: {
        

      },
    }
  },
});

interface TabProps {
  children: React.ReactNode;
  title: string;
  isSelected?: boolean;
}

const Tab = (props: TabProps) => {
  return (
    <styled.a className={tabRecipe({ isSelected: props.isSelected })}>
      {props.children}
      <p>{props.title}</p>
    </styled.a>
  );
};

export default Tab;
