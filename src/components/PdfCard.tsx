import { useState } from 'react';

import './FileCard.css';

interface Props {
  name: string;
  date: string;
  description: string;
}

export default function FileCard(props: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="header">{props.name}</div>
        <div className="date">{props.date}</div>
        <div className="description">{props.description}</div>
        <div className="row">
          <button className="btn btn-primary">
            <a
              href="https://drive.google.com/file/d/1YZCXksJWrsGvvCPHWTDz4Y8CeWFA1BAM/view"
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </button>
          <button className="btn btn-primary" onClick={handleExpandClick}>
            Expand
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="card-body">
          <iframe
            src="https://drive.google.com/file/d/1YZCXksJWrsGvvCPHWTDz4Y8CeWFA1BAM/preview"
            width="100%"
            height="700px"
          ></iframe>
        </div>
      )}
    </div>
  );
}
