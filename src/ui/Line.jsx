import styled from "styled-components";

const Line = styled.div`
  position: relative;
  border-top: 1px solid var(--color-brand-500);

  color: var(--color-brand-500);

  &::before {
    content: "";
    position: absolute;
    top: 50%; /* Position the circle in the middle of the line */
    left: 0;
    transform: translateY(-50%); /* Center the circle vertically */
    width: 10px; /* Set the width and height of the circle */
    height: 10px;
    border-radius: 50%; /* Make it a circle */
    background-color: var(--color-brand-500); /* Set the color of the circle */
  }

  transform: translateX(${(props) => props.tX}%);
`;

Line.defaultProps = {
  tX: -20,
  left: 3,
};
export default Line;
