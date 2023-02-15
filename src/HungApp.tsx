import React, { useEffect, useReducer, useRef, useState } from "react";

const reviews: {
  name: string;
  image: string;
  stars: number;
  premiumUser: boolean;
  date: string | number;
}[] = [
  {
    name: "Evondev",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
  {
    name: "Evondev2",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
];

const HungApp = () => {
  const displayReview = (
    totalReview: number,
    name: string,
    premium: boolean
  ) => (
    <>
      <strong>{totalReview}</strong>
      <p>{name}</p>
      <p>{premium ? "Premium" : "Not Premium"}</p>
    </>
  );
  return (
    <div>
      <div className="review">
        <div className="review-image">
          <img
            src="https://images.unsplash.com/photo-1659464797962-62a9b8324abc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        <div className="review-info">
          {reviews.map((review) =>
            displayReview(reviews.length, review.name, review.premiumUser)
          )}
        </div>
      </div>
    </div>
  );
};

export default HungApp;
