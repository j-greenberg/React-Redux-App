import React from 'react';
import { useState } from 'react';

import { connect } from 'react-redux';
import { getLyrics } from '../actions/mainActions';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SearchForm = props => {
 
    const [search, setSearch] = useState( {artist: '', song: ''} );

    const handleChanges = (event) => {
        setSearch({...search, [event.target.name]: event.target.value });

        console.log('Artist: ', search.artist, 'Song: ', search.song);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.getLyrics(search);
    }

    return (
        <div>
            <Container>
            <form>

                {/* <label>Artist:</label>
                
                <input
                type='text'
                name='artist'
                value={search.artist}
                onChange={handleChanges}/>
                
                <label>Song:</label>

                <input
                type='text'
                name='song'
                value={search.song}
                onChange={handleChanges}/>

                <button
                onClick={handleSubmit}>Get Lyrics!</button> */}


                <TextField
                type='text'
                name='artist'
                label='artist'
                value={search.artist}
                variant="outlined"
                color="primary"
                required
                id="artist"
                onChange={handleChanges}
                />

                <TextField
                type='text'
                name='song'
                value={search.song}
                onChange={handleChanges}
                label='song'
                variant="outlined"
                color="primary"
                required
                id='song'/>
                
                <Button
                variant='contained'
                color='primary'
                size='large'
                onClick={handleSubmit}>
                    Get Lyrics!
                </Button>
            </form>
            </Container>
        </div>
    );
};

export default connect(null, { getLyrics })(SearchForm);