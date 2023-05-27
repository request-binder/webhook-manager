import { useState, useEffect } from 'react';
import requestService from '../services/requests.ts';
import { Request } from "../types.ts";
import { useParams } from 'react-router-dom';
import RequestList from "./RequestList.tsx"

const Binder = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const { binderId } = useParams();
  const domain = window.location.host;
  const url = `https://${domain}/listener/${binderId}`

  useEffect(() => {
    requestService.getAll(binderId).then((initialRequests: Request[]) => {
      setRequests(initialRequests);
    });
  }, [binderId]);

  useEffect(() => {
    const source = new EventSource('/binders/events/' + binderId);

    source.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setRequests((prev) => [data, ...prev])
    }

    return () => {
      source.close(); // Close the EventSource connection when the component unmounts
    };
  }, [binderId, requests])

  return (
    <RequestList url={url} requests={requests} />
  )
}

export default Binder;
