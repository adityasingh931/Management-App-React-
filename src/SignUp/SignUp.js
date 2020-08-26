import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"", 
            first_name:"",
            last_name:"",
            address:"",
            dob:"",
            company:"",
            SugnUpFormData: {}
         };
    }
    handleChange = (data) => {

        let name = data.target.name
        let value = data.target.value
        this.setState((state) => {
          let SugnUpFormData = state.SugnUpFormData
          return {
            [name]: value,
            SugnUpFormData: {
              ...SugnUpFormData,
              [name]: value
            }
          }
        })
      }

    onClick = () =>{
        axios.post('http://localhost:8000/api/manager/', this.state.SugnUpFormData)
    }

    render() {
        const {email, password, first_name, last_name, dob, company, address}= this.state
        return (
            <div>
                <form action="" className="form_up_box" style={{ marginTop: '30px' }}>
                    <div className="floating-label col-md-6" style={{ display: 'block' }} >
                        <input
                            name='first_name'
                            type='text'
                            min='1'
                            maxLength='250'
                            value={first_name}
                            onChange={this.handleChange}
                            className='floating-input'
                        />
                        <label>First name</label>
                    </div>
                    <div className="floating-label col-md-6" style={{ display: 'block' }} >
                        <input
                            name='last_name'
                            type='text'
                            min='1'
                            maxLength='250'
                            value={last_name}
                            onChange={this.handleChange}
                            className='floating-input'
                        />
                        <label>Last name</label>
                    </div>
                    <div className="floating-label col-md-6" style={{ display: 'block' }} >
                        <input
                            name='email'
                            type='email'
                            min='1'
                            maxLength='250'
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
                    <div className="floating-label col-md-6" style={{ display: 'block' }} >
                        <input
                            name='address'
                            type='text'
                            min='1'
                            maxLength='250'
                            value={address}
                            onChange={this.handleChange}
                            className='floating-input'
                        />
                        <label>address</label>
                    </div>
                    <div className="floating-label col-md-6" style={{ display: 'block' }} >
                        <input
                            name='dob'
                            type='date'
                            min='1'
                            maxLength='250'
                            value={dob}
                            onChange={this.handleChange}
                            className='floating-input'
                        />
                        <label>Date of Birth</label>
                    </div>
                    <div className="floating-label col-md-6" style={{ display: 'block' }} >
                        <input
                            name='company'
                            type='text'
                            min='1'
                            maxLength='250'
                            value={company}
                            onChange={this.handleChange}
                            className='floating-input'
                        />
                        <label>Company</label>
                    </div>
                
                </form>
                <div>
                
                <Link to ="/"><button type='submit' onClick = {this.onClick}>SignUp</button></Link>
                <Link to ="/">Login</Link>

                </div>
            </div>
        )
    }
}

export default SignUp;