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
