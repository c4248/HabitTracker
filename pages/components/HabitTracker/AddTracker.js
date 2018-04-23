import { connect } from 'react-redux'
import { createHabit } from '../../actions/habitA'
import moment from 'moment'

class AddTracker extends React.Component {
    state = {
        title: '',
        date: null
    }

    onChange = (e) => {
        this.setState({title: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.setState(
            {date: moment().valueOf()},
            ()=>this.props.dispatch(createHabit(this.state))
        )   
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input value={this.state.title} onChange={this.onChange} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default connect()(AddTracker)