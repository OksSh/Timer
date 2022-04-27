interface IProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ onClick, text }: IProps) => {
  return <button onClick={onClick}>{text}</button>;
};
