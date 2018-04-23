import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import Link from 'next/link'

const store = configureStore()

const Layout = (props) => (
        <Provider store={store}>
            <div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/configure"><a>Settings</a></Link>
                {props.children}
            </div>
        </Provider>  

)

export default Layout