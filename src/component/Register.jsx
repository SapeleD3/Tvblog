import React from 'react'


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            RegEmail: '',
            RegPassword: '',
            LogEmail: '',
            LogPassword: ''
        }
    }

    onRegEmailChange = (event) => {
        const { value } = event.target;
        this.setState({
            RegEmail: value
        })
    }
    onRegPasswordChange = (event) => {
        const { value } = event.target;
        this.setState({
            RegPassword: value
        })
    }
    onfullNameChange = (event) => {
        const { value } = event.target;
        this.setState({
            fullName: value
        })
    }
    onLogEmailChange = (event) => {
        const { value } = event.target;
        this.setState({
            LogEmail: value
        })
    }
    onLogPasswordChange = (event) => {
        const { value } = event.target;
        this.setState({
            LogPassword: value
        })
    }

    onSubmitRegister = () => {
        fetch('http://localhost:6536/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               email: this.state.RegEmail,
               name: this.state.fullName,
               password: this.state.RegPassword 
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id){
                this.props.loadUser(data)
                this.props.onRouteChange('upload')
            }
        })
        
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:6536/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               email: this.state.LogEmail,
               password: this.state.LogPassword 
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id){
                this.props.loadUser(data)
                this.props.onRouteChange('upload')
            } else {
                alert('Invalid Email and Password')
            }
        })
        
    }


    render() {
        return (
            <div className="mw9 center ph3-ns">
                <div className="cf ph2-ns pa5 ">
                    <div className="fl w-100 w-50-ns pa2 mw6 shadow-5 center">
                        <div className="fl w-100 pa3">
                            <main className="pa4 black-80">
                                <div className="measure center">
                                    <fieldset className="ba b--transparent ph0 mh0">
                                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                                        <div className="mt3">
                                            <label className="db fw6 lh-copy f6" >FullName</label>
                                            <input
                                                onChange={this.onfullNameChange}
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="Name" />
                                        </div>
                                        <div className="mt3">
                                            <label className="db fw6 lh-copy f6">Email</label>
                                            <input
                                                onChange={this.onRegEmailChange}
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" />
                                        </div>
                                        <div className="mv3">
                                            <label className="db fw6 lh-copy f6">Password</label>
                                            <input
                                                onChange={this.onRegPasswordChange}
                                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" />
                                        </div>
                                    </fieldset>
                                    <div className="">
                                    <button
                                            onClick={this.onSubmitRegister}
                                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Register</button>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div className="fl w-100 w-50-ns pa2 mw6 shadow-5 center">
                        <div className="fl w-100">
                            <main className="pa4 black-80">
                                <div className="measure center">
                                    <fieldset className="ba b--transparent ph0 mh0">
                                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                                        <div className="mt3">
                                            <label className="db fw6 lh-copy f6">Email</label>
                                            <input
                                                onChange={this.onLogEmailChange}
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" />
                                        </div>
                                        <div className="mv3">
                                            <label className="db fw6 lh-copy f6">Password</label>
                                            <input
                                                onChange={this.onLogPasswordChange}
                                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" />
                                        </div>
                                    </fieldset>
                                    <div className="">
                                        <button
                                            onClick={this.onSubmitSignIn}
                                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Sign in</button>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Register