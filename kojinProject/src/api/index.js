import axios from "axios";
// axiosを利用するよき再利用する為オブジェクト化して利用
export default axios.create({
  baseURL: "//localhost:8000/api"
});
