import React from "react";

const Form =({handleChange,email, password,first_name, last_name,
    address, dob, company})=>
    {
    return(<>
        <form action="" className="form_up_box" style={{ marginTop: '30px' }}>
                    <div className="floating-label col-md-6" style={{ display: 'block' }} >
                        <input
                            name='first_name'
                            type='text'
                            min='1'
                            maxLength='250'
                            value={first_name}
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                            className='floating-input'
                        />
                        <label>Company</label>
                    </div>
                </form>
        </>)
}

export default Form;