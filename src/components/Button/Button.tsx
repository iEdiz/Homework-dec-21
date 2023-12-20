import style from './Button.module.css'

type ButtonProps = {
  text: string;
  type?: HTMLButtonElement["type"];
  onClick?: () => void;
};

export const Button = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={style.button}>
      {text}
    </button>
  );
};
