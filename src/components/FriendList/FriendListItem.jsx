export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
}
