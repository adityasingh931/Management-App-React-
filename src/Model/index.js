import React from "react";
import Modal from "react-bootstrap/Modal";
import "./Style.css";
import Form from "../Form/Form"

export default ({ show, handleChange, email, password, first_name, last_name,
  address, dob, company, mobile, primaryBtn, secondaryBtn }) => {

  return (
    <Modal
      className='warning-container'
      show={show}
      onHide={secondaryBtn.onClick}
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
              handleChange={handleChange}
            />
            <form>
              <div className="floating-label col-md-6" style={{ display: 'block' }} >
                <input
                  name='mobile'
                  type='text'
                  min='1'
                  maxLength='250'
                  value={mobile}
                  onChange={handleChange}
                  className='floating-input'
                />
                <label>Mobile</label>
              </div>
            </form>
          </div>
        </Modal.Body>
      </div>
      <div className="warning-footer">
        <Modal.Footer>
          <button type='button' className='fancy_btn' onClick={() => secondaryBtn.onClick()}>
            {secondaryBtn.text}
          </button>
          <button type='button' className='fancy_btn active' onClick={() => primaryBtn.onClick()}>
            {primaryBtn.text}
          </button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};