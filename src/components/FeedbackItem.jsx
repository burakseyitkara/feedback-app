
function FeedbackItem({itemParam}) {

  return (
    <div className="card">
        <div className="num-display">{itemParam.rating}</div>
        <div className="text-display">{itemParam.text}</div>
    </div>
  )
}

export default FeedbackItem