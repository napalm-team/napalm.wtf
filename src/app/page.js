import React from 'react';

export default function Home() {
  const currentLocation = window.location.href;
  const downloadLink = `${currentLocation}/download`;

  return (
    <div className="content">
      <h1>Napalm <span className="beta">BETA</span> Loader</h1>
      <div className="download">
        <a href={downloadLink} className="button">Download</a>
      </div>
    </div>
  );
}
