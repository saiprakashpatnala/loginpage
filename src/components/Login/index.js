import {Link} from 'react-router-dom'

import LoginContext from '../../Context/LoginContext'

import './index.css'

const Login = () => (
  <LoginContext.Consumer>
    {value => {
      const {
        name,
        email,
        gender,
        enterName,
        enterEmail,
        enterGender,
        submitDetails,
      } = value

      const four = props => {
        const {history} = props

        submitDetails()
        history.push('/home')
      }

      const one = event => {
        enterName(event.target.value)
      }

      const two = event => {
        enterEmail(event.target.value)
      }

      const three = event => {
        enterGender(event.target.value)
      }

      return (
        <div>
          <form onSubmit={four}>
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input
                required
                onChange={one}
                id="name"
                type="text"
                value={name}
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                required
                onChange={two}
                id="email"
                type="email"
                value={email}
              />
            </div>
            <div className="input-container">
              <label htmlFor="gender">Gender</label>
              <input
                required
                onChange={three}
                id="gender"
                type="text"
                value={gender}
              />
            </div>
            <Link to="/home">
              <button type="submit">Submit</button>
            </Link>
          </form>
        </div>
      )
    }}
  </LoginContext.Consumer>
)

export default Login
