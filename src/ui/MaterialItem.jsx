import { BsFileEarmarkText } from "react-icons/bs";
import styled from "styled-components";
import Fancy from "./Fancy";

const StyledMaterialItem = styled.div`
  display: flex;
  gap: 1rem;
  font-size: var(--font-size-llg);
`;

const StyledIcon = styled.div`
  flex-grow: 0; /* Prevents item from growing */
  flex-shrink: 0; /* Prevents item from shrinking */
  flex-basis: 2rem;
`;

function MaterialItem({ file }) {
  const index = file.name.indexOf("/"); // Find the index of the first occurrence of '/'
  const substring = file.name.substring(index + 1);
  return (
    <StyledMaterialItem>
      <StyledIcon>
        <BsFileEarmarkText />
      </StyledIcon>
      <a
        href={file.url}
        target="_blank"
        rel="noopener noreferrer"
        key={file.id}
      >
        <Fancy color="grey-700">{substring}</Fancy>
      </a>
    </StyledMaterialItem>
  );
}

export default MaterialItem;
