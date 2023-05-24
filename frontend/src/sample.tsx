import {Request} from "./types.ts"

const request1: Request = {
  header: {stuff: "h1"}, 
  body: {stuff: "b1"}, 
  createdAt: "t1", 
}

const request2: Request = {
  header: {stuff: "h2"}, 
  body: {stuff: "b2"}, 
  createdAt: "t2", 
}

const request3: Request = {
  header: {stuff: "h3"}, 
  body: {stuff: "b3"}, 
  createdAt: "t3", 
}

const sampleRequests: {sample: Request[]}= {
  sample: [request1, request2, request3]
}

export {
  sampleRequests
}