import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  
  count: number;
  next: string | null ;
  results: T[];
}




const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e757b1264a8b494b81d1a45a9bb17544",
  },
});

class APIClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getData = (config: AxiosRequestConfig) => {
    return axiosInstance
    .get<FetchResponse<T>>(this.endPoint , config)
    .then((res) => res.data);
  };

  postData=(data: T)=> {
    return axiosInstance.post<T>(this.endPoint, data)
    .then((res) => res.data);
  }

  getGame = ( id: number | string )=> {
    return axiosInstance.get<T>(this.endPoint + "/" + id )
    .then((res)=> res.data)
  }

  
}
export default APIClient;