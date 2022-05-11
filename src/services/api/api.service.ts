import { VertApiService } from "@verg/api-service";
import { AxiosInstance } from "axios";
import { VertApiServiceModel } from "../../models/api.model";
import axiosInstanceCreated from "./axios.api";
import Entities from "./entities.api";

class Api {
  private axiosInstance: AxiosInstance;
  base: VertApiServiceModel;
  entities: Entities;

  constructor({ axiosInstance }: { axiosInstance: AxiosInstance }) {
    this.axiosInstance = axiosInstance;
    this.base = new VertApiService({ axiosInstance });
    this.entities = new Entities({
      vertApiInstance: this.base,
    });
  }
}

const api = new Api({ axiosInstance: axiosInstanceCreated });
export default api;
