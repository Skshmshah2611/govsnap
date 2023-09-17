import axios from "axios";
export default axios.create({
  baseURL: "https://synth-ai-envoys.onrender.com",
  headers: {
    "Content-type": "application/json"
  }
});

const internalAPI = ()=>{
  return axios.create({
    baseURL: "https://synth-ai-envoys.onrender.com",
    headers: {
      "Content-type": "application/json",
    }
  })
}

export {internalAPI}