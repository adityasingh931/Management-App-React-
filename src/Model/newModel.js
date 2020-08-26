import React from "react";
import Model from './index'


const NewModal = (props) => {
    return (
        <Model
            email={props.email}
            password={props.password}
            first_name={props.first_name}
            last_name={props.last_name}
            dob={props.dob}
            company={props.company}
            address={props.address} 
            mpbile={props.mobile}
            show={props.show}
            failMessage={props.failMessage}
            handleChange={props.handleChange}
            primaryBtn={{
                text:"Save",
                onClick: props.saveModel
            }}
            secondaryBtn={{
                text:"Cancel",
                onClick: props.hideModel
            }}
        />
    )
}

export default NewModal;