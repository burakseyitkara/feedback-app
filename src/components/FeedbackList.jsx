import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList({ feedbackParam, handleDelete }) {
  if (!feedbackParam || feedbackParam.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
    <AnimatePresence>
      
      {feedbackParam.map((item) => (
        <motion.div 
        key={item.id}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        >
        <FeedbackItem key={item.id} itemParam={item} handleDelete ={handleDelete} />
        </motion.div>
      ))}
  
    </AnimatePresence>
    </div>
  );
  
  // return (
  //   <div className="feedback-list">
  //     {feedbackParam.map((item) => (
  //       <FeedbackItem key={item.id} itemParam={item} handleDelete ={handleDelete} />
  //     ))}
  //   </div>
  // );
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
