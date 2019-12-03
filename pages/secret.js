import React from 'react';
import withSecret from '../components/hoc/withSecret';

// class Secret extends React.Component {

const Secret = props => {


    // renderSecretPage = () => {
    //     const isAuthenticated = true;
        
    //     if(isAuthenticated) {
    //         return(
    //             <h1>
    //                 I am a secret user
    //             </h1>
    //         )

    //     } else {
    //         return(
    //             <h1>
    //                 I am not a secret user
    //             </h1>
    //         )
    //     }
    // }
    // render() {
        return(
            // this.renderSecretPage();
            <h1>I am a secret</h1>
        )
    // }
}

export default withSecret(Secret);