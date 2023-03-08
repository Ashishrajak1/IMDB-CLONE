import React, { useEffect, useState } from "react";
import "./Cards.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
  const [IsLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetIsLoading(false);
    }, 1600);
  }, []);

  return (
    <div>
      {IsLoading ? (
        <div className="Cards">
          <SkeletonTheme baseColor="#6495ED" highlightColor="#79BAEC">
            <Skeleton height={280} width={200} duration={0.5} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/moviedetail/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="Cards">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
            />
            <div className="Cards_overlay">
              <div className="cards_title">{movie.original_title}</div>
              <div className="Cards_im_runtime">
                <div className="Cards_relese">{movie.release_date}</div>
                <span className="Cards_rating_star">
                  <i className="fa-solid fa-star"></i>
                </span>
                <span className="Cards_rating">{movie.vote_average}</span>
              </div>
              <div className="Cards_discri">{movie.overview}</div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Cards;
