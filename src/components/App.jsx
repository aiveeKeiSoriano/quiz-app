import QuizApp from './QuizApp'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Result from './Result'

 export default function App(props) {
    return (
        <Router>
            <Switch>
                <Route path="/result">
                    <Result />
                </Route>
                <Route path="/">
                    <QuizApp {...props} />
                </Route>
            </Switch>
        </Router>
    )
}