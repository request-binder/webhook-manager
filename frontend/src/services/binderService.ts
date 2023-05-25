const baseUrl = "/binders"
import axios, { AxiosResponse } from "axios"

export default {
  getAll: async (): Promise<string[]> => {
    const response = await axios.get(baseUrl);
    return response.data || [];
  },
}

export const createBinder = async () => {
  let res: AxiosResponse<any, any>;

  try {
    res = await axios.post(baseUrl + "/new");

    if ("endpoint" in res.data) {
      console.log(res.data.endpoint);
      return res.data.endpoint;
    }
  } catch (e) {
    alert("Failed to create new webhook binder");
  }
};
