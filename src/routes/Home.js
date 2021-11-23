import React, { Component } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

import Header from "../components/Header";
import Filters from "../components/Filters";
import MovieList from "../components/MovieList";
import styles from "../styles/movieList.module.css";
import axios from "axios";
import { upsertWishList, getWishlist } from "../actions/wishlistActions";

const MOVIEDB_API_URL = "https://api.themoviedb.org/3/";
const MOVIEDB_API_URL_KEY = "b7465807a69e9ce4c6f9fa179600d8c8";

class Home extends Component {
  constructor(props) {
    super(props);
    this.addRemove = this.addRemove.bind(this);
  }

  state = {
    currentPage: 1,
    movies: [],
    wishlist: [], // this.props.wishlist
    timeAsKey: "Test",
    userId: this.props.userState.user.id,
  };
  async componentWillMount() {
    await this.getMovies();
    this.formatMovieList();
  }

  formatMovieList() {
    console.log("L: ", this.state.userId);
    let movieList = [...this.state.movies];
    movieList = movieList.map((movie) => {
      // Check if the movie is added to the wishlist or not
      movie.addedToWishlist = this.props.wishlistState.wishlist.some(
        (id) => id === movie.id
      );
      return movie;
    });
    this.setState({ movies: movieList });
    this.setState({ timeAsKey: moment().format("x") });
  }

  async getMovies() {
    try {
      const response = await axios.get(
        `${MOVIEDB_API_URL}discover/movie?api_key=${MOVIEDB_API_URL_KEY}&page=1`
      );
      if (response.status === 200) {
        this.setState({ movies: response.data.results });
      }
      console.log("Movies: ", this.state.movies);
    } catch (err) {
      throw err;
    }
  }

  async addRemove(id) {
    await this.props.upsertWishList({
      movieId: id,
      userId: this.state.userId,
    });
    await this.props.getWishlist(this.state.userId);
    // let tempList = [...this.state.wishlist];
    // const indexOf = tempList.indexOf(id);
    // if (indexOf >= 0) tempList.splice(indexOf, 1);
    // else tempList.push(id);
    // this.setState({ wishlist: tempList }, () => this.formatMovieList());
  }

  render() {
    return (
      <div>
        <Header />
        <Filters />
        <MovieList
          key={this.state.timeAsKey}
          // className={styles.movieListContainer}
          movies={this.state.movies}
          addRemove={this.addRemove}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userState: state.userStore,
  wishlistState: state.wishlist,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { upsertWishList, getWishlist })
)(Home);
