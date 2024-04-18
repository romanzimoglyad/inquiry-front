import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: var(--font-size-sm);
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: var(--font-size-md);
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-weight: 800;
    font-size: var(--font-size-lg);
    padding: 1rem 1.2rem;
  `,
  extra: css`
    font-weight: 800;
    font-size: var(--font-size-lllg);
    padding: 1rem 1.2rem;
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-0);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 0px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
  circle: css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 100%;
    color: var(--color-grey-0);
    background-color: var(--color-brand-500);
    width: 7rem;
    height: 7rem;
    font-size: var(--font-size-llg);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-decoration: none;
  border: none;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "large",
};
export default Button;
