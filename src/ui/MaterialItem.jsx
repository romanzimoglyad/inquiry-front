import { BsFileEarmarkText } from "react-icons/bs";
import styled from "styled-components";
import Fancy from "./Fancy";
import { StyledMaterialItem } from "./Icon";

const StyledIcon = styled.div`
  flex-grow: 0; /* Prevents item from growing */
  flex-shrink: 0; /* Prevents item from shrinking */
  flex-basis: 2rem;
`;

function MaterialItem({ file, hover, isCard }) {
  const index = file.name.indexOf("/"); // Find the index of the first occurrence of '/'
  let substring = file.name.substring(index + 1);
  function handleClick(event) {}

  const text = substring.substring(0, substring.lastIndexOf("."));
  return (
    <StyledMaterialItem hover={hover}>
      <StyledIcon>
        <BsFileEarmarkText />
      </StyledIcon>
      {isCard ? (
        <div
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
          key={file.id}
          onClick={handleClick}
        >
          <Fancy color="grey-700">
            {text.length > 10 ? text.substring(0, 10) + "..." : text}
          </Fancy>
        </div>
      ) : (
        <a
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
          key={file.id}
          onClick={handleClick}
        >
          <Fancy color="grey-700">{text}</Fancy>
        </a>
      )}
    </StyledMaterialItem>
  );
}

export default MaterialItem;
