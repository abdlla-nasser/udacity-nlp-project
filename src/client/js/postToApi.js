import axios from "axios";
export default async function (url) {
  console.log("here")
  const data = await axios.post("/api", { url }).then(res => res.data)
  return data;
}