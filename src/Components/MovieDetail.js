import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

function MovieDetail() {
  const [MovieDetail, SetMovieDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Getdata();
  }, []);

  const Getdata = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b27fdc12445dd0dabe560ab983599046&language=en-us`
    );
    const data = await response.json();
    SetMovieDetail(data);
  };

  return (
    <>
      <div className="md_movie_card">
        <div classNames="md_container">
          <div className="md_cover">
            <img
              src={`https://image.tmdb.org/t/p/original${MovieDetail.poster_path}`}
              alt="cover"
              height={285}
            />
          </div>
          <div
            className="md_hero"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${MovieDetail.backdrop_path})`,
            }}
          >
            <div className="details">
              <div className="title1">{MovieDetail.original_title}</div>

              <div className="title2">{MovieDetail.tagline}</div>

              <span className="likes">{MovieDetail.vote_count} likes</span>
              <span className="lik">
                <i className="fa-solid fa-star"></i> {MovieDetail.vote_average}
              </span>
              <br />
              <span className="lik">
                Release date: {MovieDetail.release_date}
              </span>
              <br />
              <span className="lik">
                Runtime: {MovieDetail.runtime} minutes
              </span>
            </div>
          </div>

          <div className="md_description">
            <div className="column1">
              {MovieDetail && MovieDetail.genres
                ? MovieDetail.genres.map((genre) => (
                    <span className="tag">{genre.name}</span>
                  ))
                : ""}
            </div>

            <div className="column2">
              <p className="pa">{MovieDetail.overview}</p>

              <div className="avatars">
                {MovieDetail && MovieDetail.production_companies
                  ? MovieDetail.production_companies.map(
                      (production_companie) => (
                        <a href="#" className="a_avatar">
                          <img
                            src={`https://image.tmdb.org/t/p/original${production_companie.logo_path}`}
                            alt=""
                            height={40}
                          />
                        </a>
                      )
                    )
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
