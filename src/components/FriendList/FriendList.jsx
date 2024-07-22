import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';
import { Fragment } from 'react';

export const FriendList = ({ friends }) => {
  const friendListcards = friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <Fragment key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </Fragment>
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

