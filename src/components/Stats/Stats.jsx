import PropTypes from 'prop-types';
import css from './Stats.module.css';
import { formatStatName} from '../../utils/index.js';

 const Stats = ({ stats }) => {
  const statsNames = Object.keys(stats);
  const statsItems = statsNames.map(key => {
    return (
      <li key={key}>
        <span className={css.label}>{formatStatName(key)}</span>
        <span className={css.quantity}>{stats[key]}</span>
      </li>
    );
  });

  return <ul className={css.stats}>{statsItems}</ul>;
};

export default Stats;
Stats.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
