import React from 'react';
import {GoogleLogin} from 'react-google-login';
import {refreshTokenSetup} from './utils/refreshToken';

const clientId = '426684313973-hiop0rcvs74sk1q2i8f4dstufubp5rmr.apps.googleusercontent.com';

function GLogin(){
    const onSuccess = (res) =>{
        console.log(res);
        console.log('[Login Success] curentUser', res.profileObj);
        //intialize the setup
        refreshTokenSetup(res);

        //check if in database

        //if not, add to user database 
    };
    const onFailure = (res) =>{
        console.log('[Login failed] res:',res);
    };

    return(
        <section>
            <div>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
        </section>
    )
}

export default GLogin;