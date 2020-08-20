import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Typography} from '@material-ui/core';
import axios from 'axios';

export class Quote extends Component {
    state = {
        quotes: []
    }
    
    //Use axios http library to get arry of quotes from server
    componentDidMount(){
        axios.get('https://type.fit/api/quotes').then(res => this.setState({quotes: res.data[0]}));
        
        // const response = axios.get('https://type.fit/api/quotes').then(res => res.data);
        // this.setState({quote: quotes[0]});
        
        // console.log(response)
    }

    render() {
    
        return (
            <div>
                <Typography id="text">{this.state.quotes.text}</Typography>  
                <Typography id="author" color="textSecondary">-{this.state.quotes.author}</Typography>
                {/* <Typography id="text">{text}</Typography>  
                <Typography id="author" color="textSecondary">- by {author}</Typography> */}
            </div>
        )
    }
}

// //PropTypes
// Quote.propTypes = {
//     quote: PropTypes.object.isRequired,
// }

export default Quote
