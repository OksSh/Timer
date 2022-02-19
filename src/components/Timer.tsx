interface IProps {
  timer: number;
}

export const Timer = ({ timer }: IProps) => {
  return <p>{timer}</p>;
};
