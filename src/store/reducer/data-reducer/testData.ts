import { ResponseDataType } from "../../../services/getData";

export const testData: Array<ResponseDataType> = [];
const testDataEl: ResponseDataType = {
  symbol: "AA",
  askPrice: 1,
  askSize: 2,
  bidPrice: 3,
  bidSize: 4,
  lastSalePrice: 5,
  lastSaleSize: 6,
  sector: "7",
  lastSaleTime: 8,
  volume: 9,
  lastUpdated: 10,
  securityType: "10",
};
for (let i = 0; i < 100; i++) {
  const copyTestDataEl: ResponseDataType = {
    ...testDataEl,
    symbol: testDataEl.symbol + " " + `${i}`,
  };
  testData.push(copyTestDataEl);
}
