import React from 'react';
import {GoogleLogout} from 'react-google-login';

const clientId = "426684313973-hiop0rcvs74sk1q2i8f4dstufubp5rmr.apps.googleusercontent.com"

function Logout(){
    const onSuccess = () =>{
        alert('Logout success!');
    }
};

return(
    <section>
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}

            ></GoogleLogout>
        </div>
    </section>
)