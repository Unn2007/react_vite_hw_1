import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
 const FriendListItem = ({avatar,name,isOnline}) => {
    const statusClasesList = (isOnline) ? `${css.status} ${css.isOnline}`:(css.status)
    
  return (


    
   
      <div className={css.item}>
        
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
        <p className={statusClasesList}>{isOnline?"Online":"Offline"}</p>
      </div>
    
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  isOnline:PropTypes.bool.isRequired
  
}