interface IProps {
  timer: any;
}

export const Timer = ({ timer }: IProps) => {
  return <p>{timer}</p>;
};
