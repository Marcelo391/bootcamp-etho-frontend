import styled, {css} from 'styled-components';

const Button = styled.a<any>`
  
  display: inline-block;
  border-radius: ${props => props.theme.border.radius['5']};
  padding: 13px;
  // margin: 0.5rem 1rem;  
  text-align: center;
  cursor: pointer;
  width: calc(100% - 16px);
  color: ${props => props.theme.pallete.typography.primary};
  opacity: 1;
  background: ${props => props.theme.pallete.core.baseBackground};
  transition: ${props => props.theme.animation.transition.transitionBackground};
  
  ${props => props.primary && css`
    background: ${props => props.theme.pallete.core.primary};

    &:hover {
      background: ${props => props.theme.pallete.core.primaryHover};
    }
  `}

  ${props => props.secondary && css`    
    text-align: left;
    
    &:hover {
      background: ${props => props.theme.pallete.core.secondaryHover};
    }
  `}

`

export default Button

// letter-spacing: 0px;
// margin: 0.5rem 1rem;
// width: 11rem;
