import { connect } from 'react-redux'
import AddTracker from './components/HabitTracker/AddTracker'
import HabitList from './components/HabitTracker/HabitList'
import Layout from './layout/Layout'

const Configure = () => (
    <Layout>
        <HabitList configure={true}/>
        <AddTracker />
    </Layout>
)

export default Configure