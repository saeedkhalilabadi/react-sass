export function ObjectToQueryString(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p) && obj[p] != null) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
export async function GetHeaders() {
  let token = await JSON.parse(localStorage.getItem("token"));
  return {
    headers: {
      "content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
  };
}
