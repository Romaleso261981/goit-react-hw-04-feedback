import PropTypes from 'prop-types';
import { Info, Container } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Container>
        <Info>{`Good: ${good}`}</Info>
        <Info>{`Neutral: ${neutral}`}</Info>
        <Info>{`Bad: ${bad}`}</Info>
        <Info>{`Total: ${total}`}</Info>
        <Info>{`Positive feedback: ${positivePercentage}`}</Info>
        </Container>
    );
}
    
export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}