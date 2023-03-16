import { instance } from "./axiosInstance/axiosInstatnce";

export const dataAPI = {
  getData(apiKey: string) {
    return instance.get<ResponseDataType[]>(`stable/tops?token=${apiKey}`);
  },
};

export type ResponseDataType = {
  symbol: string;
  sector: string;
  securityType: string;
  bidPrice: number;
  bidSize: number;
  askPrice: number;
  askSize: number;
  lastUpdated: number;
  lastSalePrice: number;
  lastSaleSize: number;
  lastSaleTime: number;
  volume: number;
};
