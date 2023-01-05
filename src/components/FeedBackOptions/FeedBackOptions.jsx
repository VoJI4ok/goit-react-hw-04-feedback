import PropTypes from 'prop-types';
import { FeedbackBtn } from './FeedBackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <ul>
        {options.map(option => {
          return (
            <FeedbackBtn
              name={option}
              onClick={onLeaveFeedback}
              type="button"
              key={option}
            >
              {option}
            </FeedbackBtn>
          );
        })}
      </ul>
    );
  };
  export default FeedbackOptions;
  
  FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };