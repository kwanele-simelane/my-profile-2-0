import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Archive = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-dark text-text font-light">
      <div>
        <div className="mb-2">
          <p className="text-left text-primary mb-2">
            <FontAwesomeIcon
              onClick={() => history.back()}
              icon={faArrowLeft}
              className="mr-4 !cursor-pointer"
            />
            Kwanele Simelane
          </p>

          <h2 className="text-left font-semibold text-2xl">All Projects</h2>
        </div>

        <hr className="mb-4" />

        <div className="relative overflow-x-auto px-4">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs text-text">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Year
                </th>
                <th scope="col" className="px-6 py-3">
                  Project
                </th>
                <th scope="col" className="px-6 py-3">
                  Tech Used
                </th>
                <th scope="col" className="px-6 py-3">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b !border-primary align-top">
                <td className="px-6 py-4">2025</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-primary whitespace-nowrap dark:text-white">
                  Disappearing Playlists
                </th>
                <td className="px-6 py-4">
                  NodeJS + Express, React, Spotify API, Google Cloud
                </td>
                <td className="px-6 py-4">
                  <a
                    className="block mb-2 hover:underline !text-primary"
                    href="https://github.com/kwanele-simelane/playlists-server">
                    Express (API)
                  </a>
                  <a
                    target="_blank"
                    className="block mb-2 hover:underline !text-primary"
                    href="https://github.com/kwanele-simelane/temporary-playlist">
                    React (UI)
                  </a>
                </td>
              </tr>
              <tr className="border-b !border-primary">
                <td className="px-6 py-4">2024</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-primary whitespace-nowrap dark:text-white">
                  Eswatini Legal Aid
                </th>
                <td className="px-6 py-4">WordPress</td>
                <td className="px-6 py-4">
                  <a
                    target="_blank"
                    className="block mb-2 hover:underline !text-primary"
                    href="https://github.com/kwanele-simelane/ela-wordpress">
                    View on github
                  </a>
                </td>
              </tr>
              <tr className="border-b !border-primary">
                <td className="px-6 py-4">2024</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-primary whitespace-nowrap dark:text-white">
                  Clockobot
                </th>
                <td className="px-6 py-4">
                  Laravel 9.x (forked and extended), MySQL, LiveWire
                </td>
                <td className="px-6 py-4">
                  <a
                    target="_blank"
                    className="block mb-2 hover:underline !text-primary"
                    href="https://github.com/kwanele-simelane/clockobot">
                    Fork on github
                  </a>
                </td>
              </tr>
              <tr className="border-b !border-primary">
                <td className="px-6 py-4">2022</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-primary whitespace-nowrap dark:text-white">
                  Music player
                </th>
                <td className="px-6 py-4">HTML, CSS & JavaScript</td>
                <td className="px-6 py-4">
                  <a
                    target="_blank"
                    className="block mb-2 hover:underline !text-primary"
                    href="https://github.com/kwanele-simelane/music-player">
                    View on github
                  </a>
                </td>
              </tr>
              <tr className="border-b !border-primary">
                <td className="px-6 py-4">2022</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-primary whitespace-nowrap dark:text-white">
                  Kwanele Simelane (v1.0)
                </th>
                <td className="px-6 py-4">HTML, CSS & JavaScript</td>
                <td className="px-6 py-4">
                  <a
                    target="_blank"
                    className="block mb-2 hover:underline !text-primary"
                    href="https://github.com/kwanele-simelane/my-profile">
                    View on github
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Archive;
