import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class TodoApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent}></Route>
                            <Route path="/login" component={LoginComponent}></Route>
                            <Route path="/welcome/:name" component={welcomeComponent}></Route>
                            <Route path="/todos" component={ListTodosComponent}></Route>
                            <Route path="/logout" component={LogoutComponent}></Route>

                            <Route component={ErrorComponent}></Route>
                        </Switch>
                        <FooterComponent />
                    </>


                </Router>
                {/* <LoginComponent/> */}
            </div>
        )
    }
}

class welcomeComponent extends Component {
    render() {
        return(
            <>
            <h1>Welcome!</h1>
            <div className ="container">
            Welcome {this.props.match.params.name} . You can manage your todos <Link to="/todos">here </Link> 
            </div>
            </>
        )

    }

}


class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand" href="#"> TODO APP </a></div>
                    <ul className="navbar-nav">
                        <li ><Link className="nav-link" to="/welcome/yns">Home </Link></li>
                        <li ><Link className="nav-link" to="/todos"> Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li ><Link className="nav-link" to="/login"> Login</Link></li>
                        <li ><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>

        )
    }

}

class FooterComponent extends Component {
    render() {
        return (
            <footer className='footer'>
                <span className="text-muted"> All Right Reserved 2020 @ynsl31</span>
            </footer>
        )
    }

}
class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1> You are logged out </h1>
                <div className="container">
                    Thank you for using Our Application
               </div>
            </div>
        )
    }

}
class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { id: 1, description: 'Go Jogging', done: false, targetDate: new Date() },
                { id: 2, description: 'Hit the gym', done: false, targetDate: new Date() },
                { id: 3, description: 'LGainz', done: false, targetDate: new Date() },
                { id: 4, description: 'Learn React', done: false, targetDate: new Date() },
            ]
        }
    }

    render() {
        return <div>
            <h1> List Todo </h1>
        <div className ="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th> Is Complited </th>
                            <th> Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()} </td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>)}
                    </tbody>

                </table>
            </div>


        </div>
    }

}
function ErrorComponent() {
    return <div>  An Error Occurred . I don't Know what to do ! Contact Support </div>
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'yns',
            password: '',
            hasLoginFailed: false,
            showSuccessMsg: false
        }
        //     this.handlerUsernameChange = this.handlerUsernameChange.bind(this)
        //    this.handlerPasswordChange = this.handlerPasswordChange.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    handlerChange(event) {
        //  console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        }
        )
    }
    // handlerPasswordChange(event){
    //     console.log(event.target.value);
    //     this.setState({password : event.target.value }
    //     )
    // }
    loginClicked(event) {
        if (this.state.username === 'yns' && this.state.password === 'yns') {
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({ showSuccessMsg: true })
            // this.setState({ hasLoginFailed: false })
        }
        else {
            console.log("failed")
            this.setState({ showSuccessMsg: false })
            this.setState({ hasLoginFailed: true })
        }

        //console.log(this.state)

    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className ="container"> 
                {/* <ShowInvalidCredentials hasLoginFailed ={this.state.hasLoginFailed}/> */}
                { this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials </div>}
                { this.state.showSuccessMsg && <div>Login Sucessful</div>}

                {/* <ShowLoginSucessful  showSuccessMsg = {this.state.showSuccessMsg}/> */}

                User Name  : <input name="username" type="text" value={this.state.username} onChange={this.handlerChange} />
                Password : <input name="password" type="text" value={this.state.password} onChange={this.handlerChange} />
                <button className ="btn btn-success"onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }

}
// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return  (<div>Invalid Credentials </div>)
//     }
//     return null
// }
// function ShowLoginSucessful(props){
//     if(props.showSuccessMsg){
//         return ( <div>Login Sucessful</div>) 
//     }
//     return null
// }

export default TodoApp