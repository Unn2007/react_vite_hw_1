import css from './TransactionHistory.module.css'
import { formatStatName} from '../../utils/formatStatName';
const TransactionHistory = ({transactions}) => {
const TransactionHistoryItem = transactions.map(({id,type,amount,currency})=>{
    return (
        <tr key={id}>
      <td>{formatStatName(type)}</td>
      <td>{formatStatName(amount)}</td>
      <td>{formatStatName(currency)}</td>
    </tr>
    )

});

return (
<table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {TransactionHistoryItem}
  </tbody>
</table>
);


}

export default TransactionHistory;
