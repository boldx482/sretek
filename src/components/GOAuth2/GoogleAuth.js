import React from 'react';

class GoogleAuth extends React.Component {
    componentDidCatch(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:'51453179011-qg1rs90infbir44fg7plkp995m5024vv.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render() {
        return (
            <div>GOOGLE OAuth</div>
        )
    }
}

export default GoogleAuth;