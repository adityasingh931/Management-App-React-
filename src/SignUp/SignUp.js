import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Form from "../Form/Form"

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            address: "",
            dob: "",
            company: "",
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

    onClick = () => {
        axios.post('http://localhost:8000/api/manager/', this.state.SugnUpFormData)
    }

    render() {
        const { email, password, first_name, last_name, dob, company, address } = this.state
        return (
            <div>
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
                                <Form
                                    email={email}
                                    password={password}
                                    first_name={first_name}
                                    last_name={last_name}
                                    dob={dob}
                                    company={company}
                                    address={address}
                                    handleChange={this.handleChange}
                                />
                            </div>
                        </Modal.Body>
                    </div>
                    <div className="warning-footer">
                        <Modal.Footer>
                            <div>

                                <Link to="/"><button type='submit' onClick={this.onClick}>SignUp</button></Link>
                                <Link to="/"><button type='submit' onClick={this.onClick}>Login</button></Link>

                            </div>
                        </Modal.Footer>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default SignUp;