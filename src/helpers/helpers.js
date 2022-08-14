export function ObjectToQueryString(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
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

export function rond(num) {
  if (!typeof num === "number") return { unit: "ریال", value: 0 };
  if (1000 > num) {
    return { unit: "ریال", value: num };
  }
  if (num >= 1000 && 1000000 > num) {
    return { unit: "هزار ریال", value: (num / 1000).toFixed(2) };
  }
  if (num >= 1000000 && 1000000000 > num) {
    return { unit: "میلیون ریال", value: (num / 1000000).toFixed(2) };
  }
  return { unit: "میلیارد ریال", value: (num / 1000000000).toFixed(2) };
}