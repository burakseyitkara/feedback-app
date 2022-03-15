import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types'

function FeedbackList({ feedbackParam, handleDelete }) {
  if (!feedbackParam || feedbackParam.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedbackParam.map((item) => (
        <FeedbackItem key={item.id} itemParam={item} handleDelete ={handleDelete} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
    feedbackParam: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    ),
}
export default FeedbackList;
