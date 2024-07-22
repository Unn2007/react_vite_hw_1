import css from './TransactionHistory.module.css'
import { formatStatName} from '../../utils/formatStatName';
export const TransactionHistory = ({transactions}) => {
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
      <th>TYPE</th>
      <th>AMOUNT</th>
      <th>CURRENCY</th>
    </tr>
  </thead>

  <tbody>
    {TransactionHistoryItem}
  </tbody>
</table>
);


}