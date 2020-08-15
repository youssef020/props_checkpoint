import React from 'react'
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function Profile(props) {
return (
<div className="Pro">
        {props.children }
        <div>
        <h1>{props.fullName}</h1>
        <ul>
        <li><p>{props.bio}</p></li>
        <li><p>{props.profession}</p></li>
        </ul>
        </div>
        <Button onClick={props.handleName} variant="light">Click</Button>
</div>
  )
}
Profile.defaultProps={fullName:"No Name !",bio:"No Bio !",profession:"No Profession !"}
Profile.propTypes={fullName:PropTypes.string, bio:PropTypes.string, profession:PropTypes.string}
