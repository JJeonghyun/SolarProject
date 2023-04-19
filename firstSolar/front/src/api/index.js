import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080",
  header: {
    "content-type": "applicatiton/json",
  },
});

export const getMainPoolList = async (pageIndex) => {
  const result = (await request.get("api/defi")).data;
  const pageSize = 10; // 한 페이지에 10개의 항목을 보여줄 것이다.
  const resultLength = result.length; // 풀의 갯수
  const resultTotalPages = Math.ceil(resultLength / pageSize); // 총 몇 페이지나 있는지 구한다.
  console.log(result);
  console.log(resultLength);
  console.log(resultTotalPages);
  return { result, resultLength, resultTotalPages };
};
