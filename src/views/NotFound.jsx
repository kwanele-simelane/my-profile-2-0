import React from "react";
import { faLinkSlash } from "@fortawesome/free-solid-svg-icons/faLinkSlash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-dark text-text font-light">
      <FontAwesomeIcon icon={faLinkSlash} className="mb-6 text-6xl" />
      <h1 className="font-bold text-3xl mb-2">Not Found</h1>
      <p className="text-center">Oops! The link you followed is broken</p>
      <Link
        className="underline hover:no-underline block my-6 text-primary"
        to="/">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
