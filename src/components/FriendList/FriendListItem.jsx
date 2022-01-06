import PropTypes from "prop-types";

import { FriendStatus, FriendAvatar, FriendName } from "./FriendList.styled";

export default function FriendListItem({ avatar, name, isOnline }) {
  //   {isOnline && 'Онлайн'}
  return (
    <>
      {/* <FriendStatus>{isOnline ? "Онлайн" : "Офлайн"}</FriendStatus> */}
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
