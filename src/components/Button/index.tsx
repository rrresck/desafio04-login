import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, desativar, onClick }: IButtonProps) => {
  return <ButtonContainer disabled={desativar} onClick={onClick}>{title}</ButtonContainer>;
}

export default Button;
