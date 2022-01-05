import { Profile } from "components/Profile/Profile";

export const TaskList = () => {
  return (
    <ul>
      <li>
        <a href="#">Задание 1 - Профиль социальной сети</a>
        <Profile />
      </li>
      <li>
        <a href="#">Задание 2 - Секция статистики</a>
      </li>
      <li>
        <a href="#">Задание 1 - Список друзей</a>
      </li>
      <li>
        <a href="#">Задание 1 - История транзакций</a>
      </li>
    </ul>
  );
};
