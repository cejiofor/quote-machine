import React, { Component } from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import {Button, Card, Typography} from '@material-ui/core';
import axios from 'axios';
import Quote from './components/Quote';
import Quotes from './components/Quotes';

class App extends Component {
  state = {
    quotes: []
  }

  //Use axios http library to get arry of quotes from server
  componentDidMount(){
    axios.get('https://type.fit/api/quotes').then(res => this.setState({quotes: res.data}));
  }



  render() {
    return (
      <div className="App">
        <ReactFCCtest/>
        <header className="App-header">
          <Card id="quote-box">
            {/* <Typography id="text">Quote Placemarker</Typography>  
            <Typography id="author" color="textSecondary">-Quote Author</Typography> */}
            {/* <Quote text={this.state.quotes[0]text} author={this.state.quotes[0].author} /> */}
            <Quote />
            <Quotes />
            <Button id="new-quote" variant="contained" size="large" color="primary">New Quote</Button>
            <Typography id="tweet-link">
            <a
              className="App-link"
              id="tweet-quote"
              href='https://twitter.com/intent/tweet?text=.thisquote'
              // target="_blank"
              // rel="noopener noreferrer"
            >
              Tweet this Quote!
            </a>
            </Typography>
          </Card>
          
        </header>
        {/* <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script> */}
      </div>
    )
  }
}

export default App;
