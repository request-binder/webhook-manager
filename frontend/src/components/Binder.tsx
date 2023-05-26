import { useState, useEffect } from 'react';
import requestService from '../services/requests.ts';
import { Request } from "../types.ts";
import RequestView from "./request.tsx";
import { useParams } from 'react-router-dom';
import {TransitionGroup, CSSTransition} from "react-transition-group"
import {duration, onEnter, onEntering, onExit, onExiting} from "./animations.ts"
const Binder = () => {
   
  const [requests, setRequests] = useState<Request[]>([]);
  const { binderId } = useParams();
  const domain = window.location.host;

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
    <>
      <h1>Binder URL: https://{domain}/listener/{binderId}</h1>
      <TransitionGroup>
        {requests.map((request) => (
          <CSSTransition key={request._id} onEnter={onEnter} classNames="Group-item" onEntering={onEntering} onExit={onExit} onExiting={onExiting} timeout={duration}>
              <RequestView
                key={request._id}
                request={request}
              />
          </CSSTransition>
        )
        )}
      </TransitionGroup>
    </>
  )
}

export default Binder;
