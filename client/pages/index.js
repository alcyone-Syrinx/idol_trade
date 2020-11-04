import React, { Component } from 'react';

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.title}
                basic page
                commit test
            </div>
        )
    }
}

Index.getInitialProps = ({ query }) => {
    return query;
}

export default Index;