import React from 'react';

import { connect } from "react-redux";

const mapStateToProps = state => {
    return{
            lyrics: state.lyrics
        };
};

const Lyrics = ({lyrics}) => {
    return (
        <div>
            <pre>
            {lyrics}
            </pre>
        </div>
    );
};

export default connect(mapStateToProps, {})(Lyrics);