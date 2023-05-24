import { useState, useEffect} from 'react'
import './App.css'
import {Request} from "./types.ts"
import RequestView from "./components/request.tsx"
import requestService from './services/requests'

function App() {
  const bin = location.pathname.split('/')[1]; 
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    requestService.getAll(bin).then(initialRequests => {
      console.log(initialRequests)
      setRequests(initialRequests)
    })
  }, [bin]);

  return (
    <>
    <h1>Bin {bin}</h1>
    <div>
      {requests.map((request) => <RequestView request={request}/>)}
    </div>
    </>
  )
}

export default App
