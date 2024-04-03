import {
  TbTimeDuration30,
  TbTimeDuration45,
  TbTimeDuration60,
  TbTimeDuration90,
} from "react-icons/tb";
import styled from "styled-components";

const StyledDuration = styled.div`
  position: absolute;
  font-size: 3rem;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  color: var(--color-brand-500);
`;

StyledDuration.defaultProps = {
  top: 3,
  left: 3,
};
function Duration({ duration, top, left }) {
  return (
    <StyledDuration top={top} left={left}>
      {duration == 60 && <TbTimeDuration60 />}
      {duration == 45 && <TbTimeDuration45 />}
      {duration == 30 && <TbTimeDuration30 />}
      {duration == 90 && <TbTimeDuration90 />}
    </StyledDuration>
  );
}

export default Duration;
