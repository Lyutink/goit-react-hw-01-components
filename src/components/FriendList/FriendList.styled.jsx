import styled from "@emotion/styled";

const FriendCard = styled.ul`
  margin: 24px 0 0 0;
  padding: 0;
  list-style: none;
`;

const FriendItem = styled.li`
  max-width: 320px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  border: 1px solid #9aa5a8;
  box-shadow: 5px 5px 20px 2px rgb(0 0 0/ 0.5);

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

const FriendStatus = styled.span`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 12px;
  background-color: ${({ isOnline }) =>
    isOnline ? "rgb(0 255 0)" : "rgb(255 0 0)"};
`;

const FriendAvatar = styled.img`
  margin-right: 24px;
  border: 1px solid #9aa5a8;
  box-shadow: 5px 5px 20px 2px rgb(0 0 0/ 0.5);
  border-radius: 12px;
`;

const FriendName = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: black;
`;

export { FriendCard, FriendItem, FriendStatus, FriendAvatar, FriendName };
