import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Typography} from '@material-ui/core';
import axios from 'axios';

function Quote({text, author}) {
    return (
        <div>
            <Typography id="text">{text}</Typography>  
            <Typography id="author" color="textSecondary">-{author}</Typography>
        </div>
    )
}

export default Quote;