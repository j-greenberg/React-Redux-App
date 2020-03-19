import React from 'react';
import './App.css';

import { connect } from "react-redux";
import SearchForm from './components/SearchForm';
import Lyrics from './components/Lyrics';

const mapStateToProps = state => {
  return {
   lyrics: state.lyrics
  };
}

function App() {
  return (
    <div className="App">
      <SearchForm/>
      <Lyrics/>
    </div>
  );
}

export default connect(mapStateToProps, {})(App)