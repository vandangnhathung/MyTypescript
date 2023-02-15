import React, { useEffect, useReducer, useRef, useState } from "react";

//arrObj: {}[] = [{}]

enum Permission {
  ADMIN = "ADMIN",
  MODERATOR = "MODERATOR",
  EDITOR = "EDITOR",
}

type Age = 10 | 20 | 30;

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

//User
const user: {
  firstName: string;
  lastName: string;
  age: number;
  isStudent: boolean;
  school: (number | string)[];
  permission: Permission;
  //Above is a union types
} = {
  firstName: "Hung",
  lastName: "Van",
  age: 21,
  isStudent: true,
  school: ["HCMUS", "HCMC"],
  permission: Permission.ADMIN,
};
//TRAVEL PARAMETERS
const travelItem: {
  name: string;
  image: string;
  totalReviews: string;
  rating: number;
  location: string;
  price: number;
  date: string | number;
  departure: string;
  features: {
    wifi: boolean;
    freeParking: boolean;
    speacialOffer: boolean;
  };
}[] = [
  {
    image: "",
    name: "Travel 1",
    totalReviews: "Travel 1 description",
    rating: 5,
    location: "HCMC",
    price: 100,
    date: "05/09/2022",
    departure: "HCMC",
    features: { wifi: true, freeParking: true, speacialOffer: false },
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
          <p>------------ FOR USER ----------</p>
          <p>
            {user.firstName}
            <p>{user.school}</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HungApp;
