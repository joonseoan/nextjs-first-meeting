import React from 'react';

export default function(Component) {
    return class withSecret extends React.Component {

        render() {
            return <Component />;
        }
    }
}