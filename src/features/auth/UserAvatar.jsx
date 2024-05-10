import styled from "styled-components";

import useToken from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SimpleModal from "../../ui/SimpleModal";
import Button from "../../ui/Button";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;
const Buttons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
`;
function UserAvatar() {
  const { token, setToken, deleteToken } = useToken();
  const [showModal, setShowModal] = useState(false);
  const close = () => {
    setShowModal(false);
  };
  const ref = useOutsideClick(close);
  const navigate = useNavigate();
  const handleClick = () => {
    if (token) {
      setShowModal(true);
    }
    if (!token) {
      navigate("/login");
    }
  };
  const handleLogout = () => {
    deleteToken();
    setShowModal(false);
    window.location.reload();
  };
  return (
    <>
      <StyledUserAvatar onClick={handleClick}>
        <Avatar
          src={token ? "avatar.png" : "default-user.jpg"}
          alt={`Avatar`}
        />
      </StyledUserAvatar>
      {showModal && (
        <SimpleModal>
          <div ref={ref}>
            <p>Are you sure you want to log out?</p>
            <Buttons>
              <Button onClick={handleLogout}>Logout</Button>
              <Button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
            </Buttons>
          </div>
        </SimpleModal>
      )}
    </>
  );
}

export default UserAvatar;
