import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "./Cards";
import "./MovieList.css";
function MovieList() {
  const [MoviesList, SetMoviesList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {
    getdata();
  }, [type]);

  const getdata = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=b27fdc12445dd0dabe560ab983599046&language=en-us`
    );
    const data = await response.json();
    SetMoviesList(data.results);
  };

  return (
    <div className="movie_list">
      <h2 className="list_title">{type ? type : "popular"}</h2>
      <div className="list_cart">
        {MoviesList.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
