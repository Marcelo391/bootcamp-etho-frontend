import styled from 'styled-components';

const InputText = styled.input`
    width: calc(100% - 16px);
    padding: 11px;
    border: 0;
    margin: 0 0 12px;
    border-radius: ${props => props.theme.border.radius['5']};
    background: ${props => props.theme.pallete.core.whiteBackground};
`;


export default InputText;