import React from "react";

const svgStyle = {
  width: "16vw",
  height: "8vw",
  maxWidth: "100px",
  maxHeight: "50px",
};

const svgMap = {
  en: (
    <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9600 4800">
      <path fill="#d52b1e" d="m0 0h2400l99 99h4602l99-99h2400v4800h-2400l-99-99h-4602l-99 99H0z" />
      <path
        fill="#fff"
        d="m2400 0h4800v4800h-4800zm2490 4430-45-863a95 95 0 0 1 111-98l859 151-116-320a65 65 0 0 1 20-73l941-762-212-99a65 65 0 0 1-34-79l186-572-542 115a65 65 0 0 1-73-38l-105-247-423 454a65 65 0 0 1-111-57l204-1052-327 189a65 65 0 0 1-91-27l-332-652-332 652a65 65 0 0 1-91 27l-327-189 204 1052a65 65 0 0 1-111 57l-423-454-105 247a65 65 0 0 1-73 38l-542-115 186 572a65 65 0 0 1-34 79l-212 99 941 762a65 65 0 0 1 20 73l-116 320 859-151a95 95 0 0 1 111 98l-45 863z"
      />
      <rect fillOpacity="0" stroke="black" strokeWidth="350" height="4800" width="9600" />
    </svg>
  ),
  jp: (
    <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">
      <rect fill="#000" height="50" width="100" />
      <rect fill="#fff" height="46" width="96" x="2" y="2" />
      <circle fill="#bc002d" cx="50" cy="25" r="12.5" />
    </svg>
  ),
};

export const getSVG = language => svgMap[language];
