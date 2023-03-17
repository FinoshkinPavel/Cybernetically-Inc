import { ResponseDataType } from "../../services/getData";

export const testData: Array<ResponseDataType> = [];
const testDataEl: ResponseDataType = {
  symbol: "AA",
  askPrice: 12,
  askSize: 12,
  bidPrice: 13,
  bidSize: 14,
  lastSalePrice: 15,
  lastSaleSize: 23,
  sector: "priz",
  lastSaleTime: 12,
  volume: 25,
  lastUpdated: 33,
  securityType: "blabla",
};
for (let i = 0; i < 100; i++) {
  const copyTestDataEl: ResponseDataType = {
    ...testDataEl,
    symbol: testDataEl.symbol + " " + `${i}`,
  };
  testData.push(copyTestDataEl);
}
