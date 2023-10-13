import React, { useEffect } from 'react'
import './css/signin.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {GoogleButton} from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AppleSignin from 'react-apple-signin-auth'
import { Link } from 'react-router-dom';

function Signin() {
    const {googleSignIn, user} = UserAuth();

    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn();
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(user != null && Object.keys(user).length !== 0){
            navigate('/')
        }else{
            navigate('/signin')
        }
        console.log(user)
    },[user])
  return (
    <div className='SignInPage'>
      <div className="leftSideSign">
        <div className="leftSideHeader">
            <h2>LOGO</h2>
        </div>
        <div className="leftSideTitle">
            <h1>Board.</h1>
        </div>
        <div className="socialMediaTitle">
            <GitHubIcon className='github' fontSize='large'/>
            <TwitterIcon className='github' fontSize='large'/>
            <LinkedInIcon className='github' fontSize='large'/>
            <GitHubIcon className='github' fontSize='large'/>
        </div>
      </div>
      <div className="rightSideSign">
            <div className="contRight">
            <div className="rightSideHeader">
                <h2>Sign In</h2>
                <p>Sign in to your account</p>
            </div>
            <div className="signInButton3rd">
                <GoogleButton style={{backgroundColor:"white", color:"black" ,fontFamily:"'Montserrat', sans-serif", borderRadius:"5px", border:"none", boxSahdow:"none", width:"220px"}} onClick={handleGoogleSignIn} className="googleLogin"/>
                <AppleSignin uiType="light" style={{height:"50px", width:"220px", fontFamily:"'Montserrat', sans-serif", border:"none"}} className="googleLogin"/>
            </div>
            <div className="InputCont">
                <label className='inputLabel'>Email address</label>
                <input type="email" className='inputText' />
                <label className='inputLabel'>Password</label>
                <input type="password" className='inputText' />
                <Link className='frgt'><h3>Forgot Password?</h3></Link>
                <button className='SignInButton'>Sign In</button>
                <p className='para'>Don't have an account? <Link><span className='paraSpan'>Register here</span></Link></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
