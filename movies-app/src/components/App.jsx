import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
import AddMovie from "./AddMovie";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

class App extends React.Component {
  state = {
    movies: [],

    searchQuery: "",
  };

  /* async componentDidMount() {
    const baseURL = "http://localhost:3002/movies";
    const response = await fetch(baseURL);
    console.log(response);
    const data = await response.json();
    console.log(data);
    this.setState({ movies: data});
  } */

  async componentDidMount() {
    const response = await axios.get("http://localhost:3002/movies");
    console.log(response);
    this.setState({ movies: response.data });
  }

  /* deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState({
      movies: newMovieList,
    });

    this.setState((state) => ({
      movies: newMovieList,
    }));
  }; */

  deleteMovie = async (movie) => {
    /* const baseURL = `http://localhost:3002/movies/${movie.id}`;
    await fetch(baseURL, {
      method: "DELETE",
    }); */
    axios.delete(`http://localhost:3002/movies/${movie.id}`);
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });

    return (

      <Routes>
      <Router>
        <div className="container">
          <Route
            path="/" exact
            render={() => (
              <React.Fragment>
                <div className="row">
                  <div className="col-lg-12">
                    <SearchBar searchMovieProp={this.searchMovie} />
                  </div>
                </div>

                <MovieList
                  movies={filteredMovies}
                  deleteMovieProp={this.deleteMovie}
                />
              </React.Fragment>
            )}
          ></Route>

          <Route path="/add" Component={AddMovie} />
  
        </div>
      </Router>
      </Routes>
    );
  }
}

export default App;
