import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import {v4 as uuidv4} from 'uuid'

import LoginContext from './Context/LoginContext'

import Home from './components/Home'

import Login from './components/Login'

class App extends Component {
  state = {name: '', email: '', gender: '', array: []}

  enterName = ValidName => {
    this.setState({name: ValidName})
  }

  enterEmail = ValidEmail => {
    this.setState({email: ValidEmail})
  }

  enterGender = ValidGender => {
    this.setState({gender: ValidGender})
  }

  submitDetails = event => {
    event.preventDefault()

    const {name, email, gender} = this.state
    const newPerson = {
      id: uuidv4(),
      name,
      email,
      gender,
    }
    this.setState(prevState => ({
      array: [...prevState.array, newPerson],
      name: '',
      email: '',
      gender: '',
    }))
  }

  render() {
    const {name, email, gender, array} = this.state

    return (
      <LoginContext.Provider
        value={{
          name,
          email,
          gender,
          array,
          enterName: this.enterName,
          enterEmail: this.enterEmail,
          enterGender: this.enterGender,
          submitDetails: this.submitDetails,
        }}
      >
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </div>
      </LoginContext.Provider>
    )
  }
}

export default App
