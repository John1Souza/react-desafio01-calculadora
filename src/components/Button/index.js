

import { ButtonContainer } from "./styles";


const Input = ({label, onClick}) => {
    return (
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>        
    );
}

export default Input;