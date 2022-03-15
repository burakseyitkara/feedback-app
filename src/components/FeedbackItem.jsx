import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({itemParam,handleDelete}) {

    
  return (
    <Card >
        <div className="num-display">{itemParam.rating}</div>
        <button onClick={() => handleDelete(itemParam.id)} className='close'>
            <FaTimes color='purple'/> 
        </button>
        <div className="text-display">{itemParam.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    itemParam: PropTypes.object.isRequired,
}


export default FeedbackItem