import { wrap } from "../../styled-system/patterns";

type CardProps = {
  color?: string;
  children: React.ReactNode;
};



const Card = ({ color, children }: CardProps) => {
  return (
    <div
      className={wrap({
        bgColor: color,
        shadow: '0em 0em 0.3em 0 lightGrey',
        p: '2rem',
        m: '1rem',
        rounded: '1em',
        w: 'fit-content'
      })}
    >
      {children}
    </div>
  );
};

export default Card;
