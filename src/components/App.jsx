import  Profile  from './Profile/Profile';

import  FriendList  from './FriendList/FriendList';
import  TransactionHistory  from './TransactionHistory/TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      

      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />




    </>
  );
};
