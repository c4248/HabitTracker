import { connect } from 'react-redux'
import { addTask, updateTask } from '../../actions/agendaA'

class TaskRow extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            keyValue: props.keyValue,
            isForm: false,
            task: props.task,
            hour: props.hour,
            day: props.day.format('MMMM Do YYYY'),
            changed: false
        }
    }
//UNABLE TO USE DUE TO THIRD PARTY LIBRARIES USING LEGACY LIFECYCLE METHODS
    // static getDerivedStateFromProps(nextProps, prevState){
    //     if(nextProps.task !== prevState.task){
    //         return {task: nextProps.task}
    //     }
    //     return prevState
    // }
    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.task !== this.props.task){
            this.setState({task: this.props.task, keyValue: this.props.keyValue})
        }
    }
    
    onClick = () => {
        this.setState((prevState)=>(
            {
                isForm: !prevState.isForm,
            }
        ))
    }

    dispatchAddTask = () => {
        if(this.state.keyValue){
            console.log('key has been found in row')
            const task = {
                task: this.state.task,
                key: this.state.keyValue
            }
            this.props.dispatch(updateTask(task))
        }else {
            const task = {
                task: this.state.task,
                hour: this.state.hour,
                day: this.state.day
            }
            this.props.dispatch(addTask(task))
        }
        
    }

    onChange = (e) => {
        this.setState({changed:true, task: e.target.value})
    }

    onBlur = () => {
        if(this.state.changed){
            this.dispatchAddTask()
        }
        this.setState((prevState)=>({
            isForm: !prevState.isForm,
            changed: false
        }))  
    }

    moveCaret(e) {
        let tempValue = e.target.value
        e.target.value = ''
        e.target.value = tempValue
    }

    render() {
        return (
            <tr>
                <td>{this.props.hour}</td>
                
                {this.state.isForm ? 
                    <td>       
                        <textarea autoFocus onFocus={this.moveCaret} onBlur={this.onBlur} value={this.state.task} onChange={this.onChange}/>
                    </td> :               
                    <td onClick={this.onClick}>{this.state.task}</td>              
                }
                
                <style jsx>{`
                    textarea{
                        width: 100%;
                        resize: none;
                    }
                    tr{
                        border: 1 px solid;
                    }
                    td{
                        border: 1px solid;
                        min-width: 300px;
                        height: 1.9rem;
                        white-space: pre-line;
                    }
                    table{
                        border: 1px solid black;
                    }
                `}</style>
            </tr>
        )
    }
}

export default connect()(TaskRow)