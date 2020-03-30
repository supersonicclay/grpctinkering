import React from 'react';
import './App.css';

import { Empty } from './grpc/groceries_pb.js';
import { GroceriesClient } from './grpc/groceries_grpc_web_pb.js';

const client = new GroceriesClient('http://localhost:50099');

function App() {

  const [stuff, setStuff] = React.useState('');

  function doStuff() {
    const request = new Empty();

    client.getAll(request, {}, function (err, response) {
      console.log(err);
      console.log(response);
      if (!err) {
        console.log(response.getMessage());
        setStuff(response.getMessage());
      }
    });
  }

  return (
    <div className="App">
      <div><button onClick={doStuff}>Go!</button></div>
      <div>Response: {stuff}</div>
    </div>
  );
}

export default App;
