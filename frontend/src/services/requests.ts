import axios from 'axios'
import { Request } from '../types'
const baseUrl = "/binders/"

const getAll = (bin: string | undefined): Promise<Request[]> => {
  const request = axios.get(baseUrl + bin);
  return request.then(response => response.data)
}

export default {
  getAll
}
