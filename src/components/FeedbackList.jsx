import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbackParam }) {
  if (!feedbackParam || feedbackParam.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedbackParam.map((item) => (
        <FeedbackItem key={item.id} itemParam={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
