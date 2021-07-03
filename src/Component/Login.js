import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

export default class Login extends Component {
    render() {
            const facebookResponse = (response) => {
              console.log(response); // Return the object of the Facebook Profile with name, email, picture
            }
        
            const googleResponse = (response) => {
              console.log(response); // Return the object of the google profile
            }
        return (
            <div>
            <FacebookLogin
              appId="1504870353016955" //APP ID
              fields="name,email,picture"
              callback={facebookResponse}
            />
            <br/>
            <br/>
            <GoogleLogin
              clientId="808244463415-9g35agqoo763odqmaik8fsas7bojbnam.apps.googleusercontent.com" //CLIENT ID
              buttonText="Login with Google"
              onSuccess={googleResponse}
              onFailure={googleResponse}
            />
            </div>
        )
    }
}
