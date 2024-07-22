import PropTypes from 'prop-types';
import  FriendListItem  from '../FriendListItem/FriendListItem';
import css from '../FriendList/FriendList.module.css';


const  FriendList = ({ friends }) => {
  const friendListcards = friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    );
  });

  return <ul className={css.friendList}>{friendListcards}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;