import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({itemParam}) {

  return (
    <Card >
        <div className="num-display">{itemParam.rating}</div>
        <div className="text-display">{itemParam.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    itemParam: PropTypes.object.isRequired,
}


export default FeedbackItem