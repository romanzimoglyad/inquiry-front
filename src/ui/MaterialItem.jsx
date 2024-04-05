import { BsFileEarmarkText } from "react-icons/bs";
import styled from "styled-components";
import Fancy from "./Fancy";
import { StyledMaterialItem } from "./Icon";

const StyledIcon = styled.div`
  flex-grow: 0; /* Prevents item from growing */
  flex-shrink: 0; /* Prevents item from shrinking */
  flex-basis: 2rem;
`;

function MaterialItem({ file, hover }) {
  const index = file.name.indexOf("/"); // Find the index of the first occurrence of '/'
  const substring = file.name.substring(index + 1);
  return (
    <StyledMaterialItem hover={hover}>
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
