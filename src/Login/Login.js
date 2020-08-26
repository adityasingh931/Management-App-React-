import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import UserTable from "../UserTable/UserTable"
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            LoginFormData: {},
            loginSuccess: []
        };
    }

    componentDidMount() {
        const userInfo = JSON.parse(localStorage
            .getItem("USER_INFO")) || [];
        this.setState({
            loginSuccess: userInfo
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

    onClick = () => {
        axios.post('http://localhost:8000/api/manager/login/', this.state.LoginFormData).then(
            res => {
                localStorage.setItem("USER_INFO", JSON.stringify(res.data.data));
                this.setState({
                    loginSuccess: res.data.data
                })

            }
        )
    }

    render() {
        const { email, password, loginSuccess } = this.state

        return (
            <>
                {loginSuccess.length === 0
                    ? (
                        <>
                            <Modal
                                className='warning-container'
                                show={true}
                                centered
                                animation
                                handleChange
                            >
                                <div className="warning-body">
                                    <Modal.Body>
                                        <div>
                                            <form action="" className="form_up_box" style={{ marginTop: '30px' }}>
                                                <div className=" col-md-6" style={{ display: 'block' }} >
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
                                                <div className=" col-md-6" style={{ display: 'block' }} >
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

                                        </div>
                                    </Modal.Body>
                                </div>
                                <div className="warning-footer">
                                    <Modal.Footer>
                                        <div>
                                            <button type='submit' onClick={this.onClick}>Login</button>
                                            <Link to="/signup">
                                            <button type='submit' onClick={this.onClick}>Sign up
                                            </button></Link>
                                        </div>
                                    </Modal.Footer>
                                </div>
                            </Modal>
                        </>
                    )
                    : <UserTable />
                }
            </>
        )
    }
}

export default Login;