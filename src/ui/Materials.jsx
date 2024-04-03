import styled from "styled-components";
import Fancy from "./Fancy";
import { FaQuestionCircle } from "react-icons/fa";

const StyledMaterials = styled.div`
  position: relative;
  display: flex;
  margin-top: 3.2rem;
  align-items: center;
`;
const Book = styled.div`
  margin-right: -0.6rem;
  &:last-child {
    margin-right: 0;
  }
`;
const Text = styled.div`
  margin-left: 5rem;
  font-size: var(--font-size-lg);
  margin-bottom: 0.8rem;
`;

const BookImg = styled.img`
  position: absolute;
  bottom: 65%;
  left: 65%;
  rotate: 20%;
  display: block;
  max-width: 100%;

  width: 10rem;
  height: 10rem;
  transform: rotate(30deg);
  object-position: center;
  border-radius: var(--border-radius-lg);
`;
function Materials() {
  return (
    <StyledMaterials>
      <BookImg src="book.png" />
      <Book>
        <FaQuestionCircle
          style={{
            color: "var(--color-brand-700)",
            height: "3.2rem",
            width: "3.2rem",
            borderRadius: "50%",
            border: "3px solid var(--color-brand-50)",
          }}
        />
      </Book>
      <Book>
        <FaQuestionCircle
          style={{
            color: "var(--color-brand-700)",
            height: "3.2rem",
            width: "3.2rem",
            borderRadius: "50%",
            border: "3px solid var(--color-brand-50)",
          }}
        />
      </Book>
      <Book>
        <FaQuestionCircle
          style={{
            color: "var(--color-brand-700)",
            height: "3.2rem",
            width: "3.2rem",
            borderRadius: "50%",
            border: "3px solid var(--color-brand-50)",
          }}
        />
      </Book>
      <Text>
        More then <Fancy color="brand-700">100</Fancy> materials and lessons
      </Text>
    </StyledMaterials>
  );
}

export default Materials;
