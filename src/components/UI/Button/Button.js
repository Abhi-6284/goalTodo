// import styled from 'styled-components'
import styless from './Button.module.css';

// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//   transition: all 500ms linear;

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

const Button = props => {
  return (
    <button type={props.type} className={styless.button}>
      {props.children}
    </button>
  );
}

export default Button;
