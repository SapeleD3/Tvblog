import React from 'react';
import './App.css';
import Register from '../component/Register';
import Land from '../component/Land'


const initialState = {
  route: 'signin',
  isSignedIn: false,
  users: {
    id: '',
    name: '',
    email: ''
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.state = initialState
  }
  onRouteChange = (route) => {
    if (route === 'signin'){
        this.setState(initialState)
    } else if (route === 'upload') {
        this.setState({isSignedIn: true})
    } 
    this.setState({route: route})
  }

  loadUser = (data) => {
    this.setState({
        users: {
            id: data.id,
            name: data.fullname,
            email: data.email
        }
  
    })
  }


  render() {
    return (
      <div>
        { 
          this.state.route === 'signin' ?
              <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
            : <Land name={this.state.users.name} onRouteChange={this.onRouteChange}/>
            
        }
      </div>
    );
  }
}

export default App;
