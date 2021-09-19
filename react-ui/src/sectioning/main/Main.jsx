import { Switch } from 'react-router-dom';
import Routes from '../../routes/Routes'

const Main = () => {

    return(
        <div className="main-container">
            <Switch>
                <Routes />
            </Switch>
        </div>
    )
}

export default Main;