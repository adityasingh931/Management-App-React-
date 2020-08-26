import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import UserTable from "../UserTable/UserTable"
import "./Login.css"
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"", 
            LoginFormData: {},
            loginSuccess:[]
         };
    }

    componentDidMount(){
        const userInfo= JSON.parse(localStorage
            .getItem("USER_INFO")) || [];
        this.setState({
            loginSuccess:userInfo
        })
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
                localStorage.setItem("USER_INFO", JSON.stringify(res.data.data));
                this.setState({
                    loginSuccess:res.data.data
                })
                
            }
        )
    }

    render() {
        const {email, password, loginSuccess}= this.state
        
        return (
            <>
            {loginSuccess.length === 0
            ?(
            <div className="Main-form-container">
                <form action="" className="form_up_box" style={{ marginTop: '30px' }}>
                    <div className="floating-label col-md-6" style={{ display: 'block' }} >
                        <label>Email</label>
                        <input
                            name='email'
                            type='text'
                            min='1'
                            value={email}
                            onChange={this.handleChange}
                            className='floating-input'
                        />
                    </div>
                    <div className="floating-label col-md-6" style={{ display: 'block' }} >
                    <label>Password</label>
                        <input
                            name='password'
                            type='password'
                            min='1'
                            maxLength='250'
                            value={password}
                            onChange={this.handleChange}
                            className='floating-input'
                        />
                        
                    </div>
                </form>
                <div>
                <button type='submit' onClick = {this.onClick}>Login</button>
                <Link to ="/signup">Sign up</Link>
                </div>
            </div>
            )
            :<UserTable/>
            }
            </>
        )
    }
}

export default Login;