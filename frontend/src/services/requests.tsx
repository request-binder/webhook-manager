import axios from 'axios'
import {Request} from '../types'
const baseUrl = '/bins/'

const getAll = (bin: string): Promise<Request[]> => {
  const request = axios.get(baseUrl + bin);
  return request.then(response => response.data)
}

export default {
  getAll
}