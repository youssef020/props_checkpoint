import React from 'react';
import './App.css';
import Profile from './Profile/Profile.js'
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';


const ProfileCard=
{fullName:"Jeff Bezos" ,
bio:"Né le 12 janvier 1964 à Albuquerque, est un entrepreneur digital, industriel, investisseur et propriétaire de média américain",
profession:"Fondateur, principal actionnaire et président-directeur général d'Amazon"}
function handleName()
{
  alert("Jeff Bezos") ;
}
function App() {
  return (


    <div className='Profile'>
    <Profile handleName={handleName} fullName={ProfileCard.fullName} bio ={ProfileCard.bio} profession={ProfileCard.profession}>

    <img className='Image' width="150px" src="./bezos.jpg"/>


    </Profile>


    </div>

);


}

export default App;
