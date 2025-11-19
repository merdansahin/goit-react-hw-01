import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import styles from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number
    })
  ).isRequired
};
