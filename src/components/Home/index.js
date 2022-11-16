import LoginContext from '../../Context/LoginContext'

import './index.css'

const Home = () => (
  <LoginContext.Consumer>
    {value => {
      const {name, email, gender} = value
      return (
        <div>
          <p>{name}</p>
          <p>{email}</p>
          <p>{gender}</p>
          <p>Hello</p>
        </div>
      )
    }}
  </LoginContext.Consumer>
)

export default Home
