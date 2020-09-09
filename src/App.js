import React, { Component, useState, useEffect, useCallback} from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import {Button, Card, Typography} from '@material-ui/core';
import axios from 'axios';
import Quote from './components/Quote';

function App() {
  // state = {
  //   quote: []
  // }

  // //Use axios http library to get arry of quotes from server
  // componentDidMount(){
  //     axios.get('https://type.fit/api/quotes').then(res => {
  //         console.log(res.data.length)
  //         let num = Math.floor(Math.random() * res.data.length)
  //         console.log(num);
  //         this.setState({quote: res.data[num]})
  //     });
  // }
  
  const[quote, setQuote] = useState(0);
  // useEffect(() => {
  //   axios.get('https://type.fit/api/quotes').then(res => {
  //         console.log(res.data.length)
  //         let num = Math.floor(Math.random() * res.data.length)
  //         console.log(num);
  //         setQuote(res.data[num]);
  //     });
  // });

  const fetchData = useCallback(() => {
    axios.get('https://type.fit/api/quotes').then(res => {
      console.log(res.data.length)
      let num = Math.floor(Math.random() * res.data.length)
      console.log(num);
      setQuote(res.data[num]);
    });
  });

  useEffect(() => {
    fetchData();
  }, []);

  const text = quote.text;
  const author = quote.author;

  return (
    <div className="App">
      {/* <ReactFCCtest/> */}
      <header className="App-header">
        <Card id="quote-box">
          <Quote text={text} author={author}  />
          <Button id="new-quote" variant="contained" size="large" color="primary" onClick={() => fetchData()}>New Quote</Button>
          <Typography id="tweet-link">
          <a
            className="App-link"
            id="tweet-quote"
            href={'https://twitter.com/intent/tweet?text='+text}
          >
            Tweet this Quote!
          </a>
          </Typography>
        </Card>
        
      </header>
    </div>
  )
}

export default App;
