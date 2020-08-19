import React, { Component } from 'react'

export class Quote extends Component {
    
    render() {
        const {title, author} = this.props.quote;
    
        return (
            <div>
                <p>{title}</p>
                <p>{author}</p>
            </div>
        )
    }
}

//PropTypes
Quote.propTypes = {
    quote: PropTypes.object.isRequired,
}

export default Quote
