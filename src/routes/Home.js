import React, { Component } from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import Header from "../components/Header";
import Filters from "../components/Filters";
import MovieList from "../components/MovieList";
import styles from '../styles/movieList.module.css'

class Home extends Component {
  render() {
    return (
      <div >
        <Header />
        <Filters/>
          <MovieList className={styles.movieListContainer}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    userState: state.userStore
})

export default  compose(withRouter, connect (mapStateToProps, {  }) )(Home);
