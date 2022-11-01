import PropTypes from 'prop-types';
 import { FeedbackList, FeedbackBtn, FeedbackItem } from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onBtnClick }) => {
    return(
     <FeedbackList>
        {options.map(option => (
            <FeedbackItem key={option}>
                <FeedbackBtn onClick={() => onBtnClick(option)}>{option}</FeedbackBtn>
            </FeedbackItem>
        ))}
    </FeedbackList>
    )

};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onBtnClick: PropTypes.func.isRequired,
}