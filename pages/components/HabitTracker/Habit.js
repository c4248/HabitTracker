import { connect } from 'react-redux'
import { delHabit, resetHabit } from '../../actions/habitA'
import moment from 'moment'

const Habit = (props) => (
    <div>
        <p>{`Days since ${props.title}`}</p>
        <h2>{Math.floor(moment.duration(moment().diff(moment(props.date))).asDays())}</h2>
        <p>Started on {moment(props.date).format('MMMM Do YYYY')}</p>
        {props.configure && <button onClick={()=>props.dispatch(delHabit(props.keyValue))}>Remove</button>}
        {props.remove && <button onClick={()=>props.dispatch(resetHabit(props.keyValue))}>Reset</button>}   
    </div>
)

export default connect()(Habit)