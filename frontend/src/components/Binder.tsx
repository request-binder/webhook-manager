import { useState, useEffect } from 'react';
import requestService from '../services/requests.ts';
import { Request } from "../types.ts";
import RequestView from "./request.tsx";
import { useParams } from 'react-router-dom';

const Binder = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const { binderId } = useParams();

  useEffect(() => {
    requestService.getAll(binderId).then((initialRequests: Request[]) => {
      setRequests(initialRequests);
    });

  }, [binderId]);

  useEffect(() => {
    const source = new EventSource('/bins/events/' + binderId);

    source.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setRequests([data, ...requests])
    }

    return () => {
      source.close(); // Close the EventSource connection when the component unmounts
    };
  }, [binderId, requests])

  return (
    <>
      <h1>Binder URL: {binderId}</h1>
      <div>
        {requests.map((request) => <RequestView
          key={request._id}
          request={request}
        />)}
      </div>
    </>
  )
}

export default Binder;
