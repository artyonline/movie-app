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
import { signOut } from "../actions/userAction";
import { upsertWishList, fetchWishlist } from "../actions/wishlistActions";
import Cookies from "js-cookie";

const MOVIEDB_API_URL = "https://api.themoviedb.org/3/";
const MOVIEDB_API_URL_KEY = "b7465807a69e9ce4c6f9fa179600d8c8";

class Home extends Component {
  constructor(props) {
    super(props);
    this.addRemove = this.addRemove.bind(this);
    this.logout = this.logout.bind(this);
  }

  state = {
    currentPage: 1,
    movies: [],
    wishlist: this.props.wishlistState.wishlist, // this.props.wishlist
    timeAsKey: "Test",
    userId: this.props.userState.user.id,
  };
  async componentWillMount() {
    const userId = this.state.userId ?? Cookies.get("userId");
    if (userId) await this.props.fetchWishlist(userId);
    await this.getMovies();
    this.formatMovieList();
  }
  async componentDidMount() {
    const addToWishList = this.props.location.state?.addToWishList;
  }

  formatMovieList() {
    let movieList = [...this.state.movies];
    movieList = movieList.map((movie) => {
      // Check if the movie is added to the wishlist or not
      movie.addedToWishlist = this.props.wishlistState.wishlist.some((item) => {
        return parseInt(item.movieId) === movie.id;
      });
      return movie;
    });
    this.setState({ movies: movieList });
  }

  async getMovies() {
    try {
      const response = await axios.get(
        `${MOVIEDB_API_URL}discover/movie?api_key=${MOVIEDB_API_URL_KEY}&page=1`
      );
      if (response.status === 200) {
        this.setState({ movies: response.data.results });
      }
    } catch (err) {
      throw err;
    }
  }

  async addRemove(id) {
    console.log("Add Remove");
    const userId = this.state.userId ?? Cookies.get("userId");
    if (userId) {
      await this.props.upsertWishList({
        movieId: id,
        userId,
      });
      await this.props.fetchWishlist(userId);
      this.formatMovieList();
      console.log("test: ", this.props);
    } else {
      this.props.history.push({
        pathname: "/signin",
        state: { addToWishList: id },
      });
    }
  }

  logout() {
    this.props.signOut();
    this.props.history.push({
      pathname: "/signin",
    });
  }

  render() {
    return (
      <div>
        <Header logout={this.logout} />
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
  wishlistState: state.wishlistStore,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { upsertWishList, fetchWishlist, signOut })
)(Home);
