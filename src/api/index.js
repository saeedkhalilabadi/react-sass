import axios from "../components/axios/axios-user";
import { ObjectToQueryString, GetHeaders } from "../helpers/helpers";

export async function getData(params) {
  let headers = await GetHeaders();

  console.log(headers);
  await axios
    .get(
      "/LineDist?startHisDate=14000131&endHisDate=14010631&lineThreeDigitCode=102",
      headers
    )
    .then((response) => {
      if (response.data.statusCode == 200) return response.data.detail;
    })
    .catch((error) => {
      return error;
    });
}

