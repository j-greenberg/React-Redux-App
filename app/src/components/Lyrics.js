import React from 'react';

import { connect } from "react-redux";

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const mapStateToProps = state => {
    return{
            lyrics: state.lyrics
        };
};

const useStyles = makeStyles ({
    card: {
      maxWidth: 900,
      margin: "2% auto",
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      }
    },
    media: {
      paddingTop: "56.25%"
    },
    content: {
      textAlign: "left",
      margin: '2%'
    },
    divider: {
    },
    heading: {
      fontWeight: "bold"
    },
    subheading: {
      lineHeight: 1.8
    },
    avatar: {
      display: "inline-block",
      border: "2px solid white",
      "&:not(:first-of-type)": {
      }
    }
  });
  

const Lyrics = ({lyrics}) => {
    
    const classes = useStyles();

    return (
            <Card
            className={classes.card}
            container
            variant='outlined'>
                <pre>
                {lyrics}
                </pre>
            </Card>
    );
};

export default connect(mapStateToProps, {})(Lyrics);