const baseUrl = "/binders"
import axios from "axios"

export default {
  getAll: async (): Promise<string[]> => {
    const response = await axios.get(baseUrl);
    return response.data || [];
  },
}

export const createBinder = (): void => {
  axios.post(baseUrl + "/new");
};
