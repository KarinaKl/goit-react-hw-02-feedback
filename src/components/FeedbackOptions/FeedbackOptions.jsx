import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={style.list}>
      <li>
        <button className={style.button} value="good" onClick={onLeaveFeedback}>
          Good
        </button>
      </li>
      <li>
        <button
          className={style.button}
          value="neutral"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
      </li>
      <li>
        <button className={style.button} value="bad" onClick={onLeaveFeedback}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
