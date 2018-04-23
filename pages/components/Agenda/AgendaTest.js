import Layout from '../../layout/Layout'
import { connect } from 'react-redux'
import { addTask, removeTask } from '../../actions/agendaA'

class AgendaTest extends React.Component{
    state = {
        task: ''
    }

    render(){
        return (
            <div>
                
                
                <input value={this.state.task} onChange={(e)=>(this.setState({task: e.target.value}))}/>
                <button onClick={()=>(
                        this.props.dispatch(addTask({momentStart:20, momentEnd: 2000, task: this.state.task}))
                )}>Add Task</button>

                <button onClick={()=>(
                    console.log(this.props.agenda)
                )}>Console Log</button>
                <button onClick={()=>(
                    this.props.dispatch(removeTask(this.state.task))
                )}>Remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        agenda: state.agenda
    }
}

export default connect(mapStateToProps)(AgendaTest)