import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {Typography} from '@material-ui/core'

function Quotes(props) {
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const result = await axios.get('https://type.fit/api/quotes');
            setQuotes(result.data);
        }
        fetchData();
    }, []);

    
    const [quote, setQuote] = useState([])
    useEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, quotes);


    
    return (
        <div>
            <p>{quote}</p>
            <p>{quote}</p>
            <Typography>YAAS {quote}</Typography>  
            <Typography color="textSecondary">-AY {quote}</Typography>
                
        </div>
    )
}

export default Quotes

    