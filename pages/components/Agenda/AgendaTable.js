import { connect, bindActionCreators } from 'react-redux'
import moment from 'moment'
import { getTasks, setReducerState } from '../../actions/agendaA'
import axios from '../../axios/axios'

import TaskRow from './TaskRow'

class AgendaTable extends React.Component {

    componentDidMount(){
        axios.get('/tasks.json')
            .then((response)=> {
                //this.setState({tasks: response.data})
                this.props.setReducerState(response.data)
            })
    }

    state = {
        days: [
            moment(),
            moment().add(1, 'days'),
            moment().add(2, 'days'),
        ],
        hours: ['8 AM', '12 AM', '3 PM', '7 PM'],
    }

    getTask = (day, hour) => {
        if(this.props.agenda){
            for(let key in this.props.agenda){
                if(this.props.agenda[key].day == day.format('MMMM Do YYYY')
                    && this.props.agenda[key].hour == hour){
                    return this.props.agenda[key].task
                }
            }
        }
    }

    getKey = (day, hour) => {
        if(this.props.agenda){
            for(let key in this.props.agenda){
                if(this.props.agenda[key].day == day.format('MMMM Do YYYY')
                    && this.props.agenda[key].hour == hour){
                    return this.props.agenda[key].key
                }
            }
        }
    }

    render() {
        return (
            <table>
                <tbody>
                    {this.state.days.map(day=>{
                        return(
                            <React.Fragment key={day}>
                            <tr>
                                <th colSpan="2">{day.format('dddd, MMMM Do YYYY')}</th>
                            </tr>
                            {this.state.hours.map(hour=>{
                                return (
                                    <React.Fragment key={hour}>
                                        <TaskRow keyValue={this.getKey(day, hour)} task={this.getTask(day, hour)} hour={hour} day={day}/>
                                    </React.Fragment>
                                )
                            })}
                            </React.Fragment>
                        )
                    })}
                </tbody>
                <style jsx>{`
                    table, th, td{
                        border: 1px solid black;
                    }
                `}</style>
            </table>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        agenda: state.agenda
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        setReducerState: (tasks) => {dispatch(setReducerState(tasks))}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AgendaTable)