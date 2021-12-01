import React, { Component } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import WishlistItem from "../components/WishlistItem";

import Header from "../components/Header";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchWishlist, upsertWishList } from "../actions/wishlistActions";
import Cookies from "js-cookie";
import axios from "axios";

const MOVIEDB_API_URL = "https://api.themoviedb.org/3/";
const MOVIEDB_API_URL_KEY = "b7465807a69e9ce4c6f9fa179600d8c8";

class WishList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: {
      userId: this.props.userState.user.id,
      movies: [],
      loading: true,
      test: 1,
    },
  };

  async componentWillMount() {
    const userId = this.state.data.userId ?? Cookies.get("userId");
    await this.props.fetchWishlist(userId);
    console.log("Wishlist => ", this.props.wishlistState.wishlist);
    await this.getMoviesOfWishlist();
  }

  async getMoviesOfWishlist() {
    let movieArr = [];
    this.props.wishlistState.wishlist.map(async (item) => {
      try {
        const response = await axios.get(
          `${MOVIEDB_API_URL}movie/${item.movieId}?api_key=${MOVIEDB_API_URL_KEY}&language=en-US`
        );
        if (response.status === 200) {
          movieArr.push({
            movieId: item.movieId,
            title: response.data.original_title,
            url: `https://image.tmdb.org/t/p/original${response.data.poster_path}`,
          });
        }
      } catch (err) {
        throw err;
      }
    });
    await this.setState((prevState) => ({
      data: {
        ...prevState.data,
        movies: movieArr,
        loading: false,
        test: 2,
      },
    }));
    console.log(this.state.data.movies);
  }

  render() {
    return (
      <div>
        <Header />
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>WishList</Breadcrumb.Item>
        </Breadcrumb>
        {this.state.data.test}
        <Container>
          ASd{this.state.data.movies[0]}
          {this.state.data.movies.map((item) => {
            return (
              <div className="wishlist-item">
                <WishlistItem
                  key={item.movieId}
                  movie={item}
                  removeItem={this.props.removeItem}
                />
              </div>
            );
          })}
        </Container>
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
  connect(mapStateToProps, { fetchWishlist })
)(WishList);
