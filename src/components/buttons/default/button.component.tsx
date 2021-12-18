import styled, {css} from 'styled-components';

const Button = styled.a<any>`
  
  display: inline-block;
  border-radius: 5px;
  padding: 19px;
  margin: 0.5rem 1rem;  
  text-align: center;
  cursor: pointer;
  width: 321px;  
  color: #FFFFFF;
  opacity: 1;


  ${props => props.primary && css`
    background: #E31A13;
  `}

  ${props => props.secondary && css`
    background: transparent;
    text-align: left;
    
    &:hover {
      background: #2A2A2A;
    }
  `}

`

export default Button

// letter-spacing: 0px;
// margin: 0.5rem 1rem;
// width: 11rem;
