import React from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  
  const downloadLink = `${router.asPath}/download`;

  return (
    <div className="content">
      <h1>Napalm <span className="beta">BETA</span> Loader</h1>
      <div className="download">
        <a href={downloadLink} className="button">Download</a>
      </div>
    </div>
  );
}
