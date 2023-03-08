import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import MovieList from "./MovieList";

function Home() {
  const [Movies, SetMovies] = useState([]);
  const [isLoading, SetisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetisLoading(false);
    }, 1600);
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b27fdc12445dd0dabe560ab983599046&language=en-us"
    )
      .then((response) => response.json())
      .then((data) => SetMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <div className="dot_s dot-1"></div>
          <div className="dot_s dot-2"></div>
          <div className="dot_s dot-3"></div>
          <div className="dot_s dot-4"></div>
          <div className="dot_s dot-5"></div>
        </div>
      ) : (
        <div className="Home_Poster">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
          >
            {Movies.map((movie) => (
              <div className="poster_main">
                <div className="poster_image">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt=""
                  />
                </div>

                <div className="poster_overlay">
                  <div className="poster_Im_title">{movie.original_title}</div>

                  <div className="poster_im_runtime">
                    <div className="poster_relese">{movie.release_date}</div>
                    <span className="poster_rating">{movie.vote_average}</span>
                    <span className="po_rating_s">
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </div>
                  <div className="poster_discri">{movie.overview}</div>
                </div>
              </div>
            ))}
          </Carousel>
          <MovieList />
        </div>
      )}
    </>
  );
}
export default Home;
