import css from './Reviews.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalReviews,
  positivePercentage,
}) => {
  return (
    <div>
      <span className={css.title}>Statistics</span>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span className={css.title}>Total reviews: {totalReviews}</span>
      <span className={css.title}>
        Positive feedback: {positivePercentage}%
      </span>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalReviews: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
