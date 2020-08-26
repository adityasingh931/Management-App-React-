import React, { Component } from 'react';
import BoostrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import * as ReactBootSrap from 'react-bootstrap';
import axios from "axios";
import {Link} from 'react-router-dom';
import NewModal from '../Model/newModel';
import "./UserTable.css"

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      employeeId:"",
      showModel: false,
      email:"",
      password:"", 
      first_name:"",
      last_name:"",
      address:"",
      dob:"",
      company:"",
      mobile:"",
      updateUser:false,
      userFormData: {},
      failMessage:""
    };
  }
  componentDidMount() {
    axios.get('http://localhost:8000/api/employee/').then(
      res => {

        this.setState({
          data: res.data.data
        })
      }
    )
  }

  handleChange = (data) => {

    let name = data.target.name
    let value = data.target.value
    this.setState((state) => {
      let userFormData = state.userFormData
      return {
        [name]: value,
        userFormData: {
          ...userFormData,
          [name]: value
        }
      }
    })
  }


  addUser=()=>{
    this.setState({
      userFormData:{},
      showModel: true
    })
  }

  hideModel=()=>{
    this.setState({
      showModel:false,
      updateUser:false,
      failMessage:"",
      userFormData: {},
      email:"",
      password:"", 
      first_name:"",
      last_name:"",
      address:"",
      dob:"",
      company:"",
      mobile:""
    })
  }

  handeleIdChange=(data)=>{
    let name = data.target.name
    let value = data.target.value
    this.setState((state) => {
      return {
        [name]: value
      }
    })
  }
  
  saveModel=()=>{
    if(!this.state.updateUser) {
    axios.post('http://localhost:8000/api/employee/', this.state.userFormData).then(res1 =>{
      axios.get('http://localhost:8000/api/employee/').then(
      res2 => {
      this.setState({
        data:res2.data.data,
        showModel:false,
        updateUser:false,
        failMessage:"",
        userFormData: {},
        email:"",
        password:"", 
        first_name:"",
        last_name:"",
        address:"",
        dob:"",
        company:"",
        mobile:""
      })
    })
    }).catch(err => {
      this.setState({
        failMessage:err.response.data.message
      })
      
    })
  }else {
    axios.patch(`http://localhost:8000/api/employee/${this.state.employeeId}/`, this.state.userFormData).then(res1 =>{
      axios.get('http://localhost:8000/api/employee/').then(
      res2 => {
      this.setState({
        data:res2.data.data,
        showModel:false,
        updateUser:false,
        failMessage:"",
        userFormData: {},
        email:"",
        password:"", 
        first_name:"",
        last_name:"",
        address:"",
        dob:"",
        company:"",
        mobile:""
      })
    })
    }).catch(err => {
      this.setState({
          failMessage:err.response.data.message
      })
      
    })
  }
  }

  deleteUser=()=>{
    axios.delete(`http://localhost:8000/api/employee/${this.state.employeeId}/`).then(res1 =>{
      axios.get('http://localhost:8000/api/employee/').then(
      res2 => {
      this.setState({
        data:res2.data.data
      })
    })
    })
  }

  updateUserModel=()=>{
    this.setState({
      showModel:true,
      updateUser:true
    })
  }

  logout=()=>{
    localStorage.removeItem("USER_INFO");
  }

  render() {

    const {email, password, first_name, last_name, dob, company, address, mobile, employeeId, failMessage}= this.state

    const columns = [{
      dataField: 'employee_id',
      text: 'Id'
    }, {
      dataField: 'first_name',
      text: 'First Name'
    }, {
      dataField: 'last_name',
      text: 'Last name'
    }, {
      dataField: 'email',
      text: 'Email'
    }, {
      dataField: 'dob',
      text: 'Date of Birth'
    }, {
      dataField: 'address',
      text: 'address'
    }, {
      dataField: 'company',
      text: 'Company'
    }, {
      dataField: 'mobile',
      text: 'Mobile'
    }]
    
    return (
      <div>
        
        <input name="employeeId" type="number" value={employeeId} onChange={this.handeleIdChange} placeholder="Employee Id" className="User-Id"/>
        <input type="submit" value="delete User" onClick={this.deleteUser} className="Delete-User-btn"/>
        <input type="submit" value="Update User" onClick={this.updateUserModel} className="Update-User-btn"/>
        <Link to ="/signUp">
        <input type="submit" value="Logout" onClick={this.logout} className="Logout-User-btn"/>
        </Link>
        <input type="submit" value="Add User" onClick={this.addUser} className="Add-User-btn"/>
        <NewModal
          show={this.state.showModel}
          hideModel={this.hideModel}
          handleChange={this.handleChange}
          saveModel={this.saveModel}
          email={email}
          password={password}
          first_name={first_name}
          last_name={last_name}
          dob={dob}
          company={company}
          address={address}
          mobile={mobile}
          failMessage={failMessage}
        />
        <BoostrapTable
          keyField="name"
          data={this.state.data}
          columns={columns}
          pagination={paginationFactory()}
        />
      </div>
    )
  }
}
export default UserTable;