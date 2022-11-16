import React from 'react'

const LoginContext = React.createContext({
  name: '',
  email: '',
  gender: '',
  array: [],
  enterName: () => {},
  enterEmail: () => {},
  enterGender: () => {},
  submitDetails: () => {},
})

export default LoginContext
