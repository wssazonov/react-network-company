import React from 'react';
import {useParams} from "react-router-dom";

function ConsumerInfoPage(props) {

  const {consumerId} = useParams();
  return (
    <div className="page-content">
      <p>consumerId { consumerId }</p>
    </div>
  );
}

export default ConsumerInfoPage;
