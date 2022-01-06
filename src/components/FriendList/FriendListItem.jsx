import PropTypes from "prop-types";

export default function FriendListItem({ avatar, name, isOnline }) {
  //   {isOnline && 'Онлайн'}
  return (
    <>
      <span>{isOnline ? "Онлайн" : "Офлайн"}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
