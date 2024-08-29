import React, { useEffect, useState } from 'react';

export default function Home() {
  const [downloadLink, setDownloadLink] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentLocation = window.location.href;
      setDownloadLink(`${currentLocation}/download`);
    }
  }, []);

  return (
    <div className="content">
      <h1>Napalm <span className="beta">BETA</span> Loader</h1>
      <div className="download">
        {downloadLink && (
          <a href={downloadLink} className="button">Download</a>
        )}
      </div>
    </div>
  );
}
