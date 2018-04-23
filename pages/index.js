import HabitList from './components/HabitTracker/HabitList'
import Layout from './layout/Layout'
import AgendaTable from './components/Agenda/AgendaTable'

const Index = () =>(
    <Layout>
        <div>
            <HabitList remove={true}/>
            <AgendaTable />
            
        </div>
    </Layout>
)

export default Index