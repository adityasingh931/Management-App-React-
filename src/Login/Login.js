import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"", 
            LoginFormData: {}
         };
    }
    handleChange = (data) => {

        let name = data.target.name
        let value = data.target.value
        this.setState((state) => {
          let LoginFormData = state.LoginFormData
          return {
            [name]: value,
            LoginFormData: {
              ...LoginFormData,
              [name]: value
            }
          }
        })
      }

    onClick = () =>{
        axios.post('http://localhost:8000/api/manager/login/', this.state.LoginFormData).then(
            res =>{
                console.log(res)
            }
        )
    }

    render() {
        const {email, password}= this.state
        return (
            <div>
                <form action="" className="form_up_box" style={{ marginTop: '30px' }}>
                    <div className="floating-label col-md-6" style={{ display: 'block' }} >
                        <input
                            name='email'
                            type='text'
                            min='1'
                            value={email}
                            onChange={this.handleChange}
                            className='floating-input'
                        />
                        <label>Email</label>
                    </div>
                    <div className="floating-label col-md-6" style={{ display: 'block' }} >
                        <input
                            name='password'
                            type='password'
                            min='1'
                            maxLength='250'
                            value={password}
                            onChange={this.handleChange}
                            className='floating-input'
                        />
                        <label>Password</label>
                    </div>
                </form>
                <div>
                
                <button type='submit' onClick = {this.onClick}>Login</button>

                </div>
            </div>
        )
    }
}

export default Login;