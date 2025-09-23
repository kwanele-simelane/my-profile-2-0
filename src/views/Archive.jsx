import React from "react";
import {
  faArrowLeft,
  faArrowRightLong,
  faExternalLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Archive = () => {
  return (
    <div className="min-h-screen bg-dark text-text font-light pt-12 px-2">
      <div className="mb-2 mx-auto w-full sm:!w-1/2">
        <p className="text-left text-text mb-2">
          <FontAwesomeIcon
            onClick={() => history.back()}
            icon={faArrowLeft}
            className="mr-4 !cursor-pointer"
          />
          Kwanele Simelane
        </p>

        <h2 className="text-left font-semibold text-3xl text-white">All Projects</h2>
      </div>

      <hr className="mb-4 mx-auto w-full sm:!w-1/2" />

      <div className="relative overflow-x-auto mx-auto w-full sm:!w-1/2">
        <table className="w-full overflow-x-scroll text-sm text-left rtl:text-right">
          <thead className="text-xs text-text">
            <tr>
              <th scope="col" className="px-2 py-3 hidden sm:block">
                Year
              </th>
              <th scope="col" className="px-2 py-3">
                Project
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="relative border-b !border-primary align-top">
              <td className="px-2 py-4 hidden sm:block">2025</td>
              <th
                scope="row"
                className="px-2 py-4 font-medium text-white whitespace-nowrap">
                Disappearing Playlists{" "}
                <a
                  href="https://github.com/kwanele-simelane/playlists-server"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    className="cursor-pointer ml-4 text-primary absolute right-8"
                  />
                </a>
                <span className="block font-light italic text-xs mt-2 text-text">
                  NodeJS + Express, React, Spotify API, Google Cloud
                </span>
              </th>
            </tr>
            <tr className="relative border-b !border-primary">
              <td className="px-2 py-4 hidden sm:block">2024</td>
              <th
                scope="row"
                className="px-2 py-4 font-medium text-primary whitespace-nowrap dark:text-white">
                Eswatini Legal Aid{" "}
                <a
                  href="https://github.com/kwanele-simelane/ela-wordpress"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    className="cursor-pointer ml-4 text-primary absolute right-8"
                  />
                </a>
                <span className="block font-light italic text-xs mt-2 text-text">
                  WordPress
                </span>
              </th>
            </tr>
            <tr className="relative border-b !border-primary">
              <td className="px-2 py-4 hidden sm:block">2024</td>
              <th
                scope="row"
                className="px-2 py-4 font-medium text-primary whitespace-nowrap dark:text-white">
                Clockobot (forked and extended){" "}
                <a
                  href="https://github.com/kwanele-simelane/clockobot"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    className="cursor-pointer ml-4 text-primary absolute right-8"
                  />
                </a>
                <span className="block font-light italic text-xs mt-2 text-text">
                  Laravel 9.x, MySQL, LiveWire
                </span>
              </th>
            </tr>
            <tr className="relative border-b !border-primary">
              <td className="px-2 py-4 hidden sm:block">2022</td>
              <th
                scope="row"
                className="px-2 py-4 font-medium text-primary whitespace-nowrap dark:text-white">
                Music player{" "}
                <a
                  href="https://github.com/kwanele-simelane/music-player"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    className="cursor-pointer ml-4 text-primary absolute right-8"
                  />
                </a>
                <span className="block font-light italic text-xs mt-2 text-text">
                  HTML, CSS & JavaScript
                </span>
              </th>
            </tr>
            <tr className="relative border-b !border-primary">
              <td className="px-2 py-4 hidden sm:block">2022</td>
              <th
                scope="row"
                className="px-2 py-4 font-medium text-primary whitespace-nowrap dark:text-white">
                Kwanele Simelane (v1.0){" "}
                <a
                  href="https://github.com/kwanele-simelane/my-profile"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={faExternalLink}
                    className="cursor-pointer ml-4 text-primary absolute right-8"
                  />
                </a>
                <span className="block font-light italic text-xs mt-2 text-text">
                  HTML, CSS & JavaScript
                </span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Archive;
