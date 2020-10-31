import axios from "axios";

const KEY = "AIzaSyCDXNfKq_jU5PKjDFY1x9399i5l4gRvxx4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
  },
});
