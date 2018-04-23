import axios from '../../axios/axios'
import { setReducerState } from '../../actions/habitA'
import { connect } from 'react-redux'
import Habit from './Habit'


class HabitList extends React.Component {

    componentDidMount(){
        axios.get('/habits.json').then(({data})=>{
            for(let habit in data){
                this.props.dispatch(setReducerState(data))
            }
        })
    }    

    render(){
        return (
            <div>
                {this.props.habits.map(
                    (habit, i)=><Habit 
                        configure={this.props.configure}
                        remove={this.props.remove}
                        title={habit.title} 
                        date={habit.date} 
                        keyValue={habit.key}
                        key={i} 
                    />)}
            </div>
        )
    }
    
}

const mapStateToProps = (state, props) => {
    return {
        habits: state.habit
    }
}

export default connect(mapStateToProps)(HabitList)