import axios from "axios";

async function getCar() {
  return await axios
    .get("https://api.api-ninjas.com/v1/cars?make=porsche", {
      headers: { "X-Api-Key": "piNxXEhj0MviG5vqREFdDg==KKwcc7FSl6QA3csj" },
    })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default getCar;
