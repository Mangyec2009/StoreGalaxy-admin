import { softApi } from "@/config/config";
import axios from "axios";
let local = null;
if (typeof window !== 'undefined') {
  local = localStorage.getItem('key');
}

const axiosRequest = axios.create({
  baseURL: softApi,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

export default axiosRequest;
