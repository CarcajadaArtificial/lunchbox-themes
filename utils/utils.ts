export async function bring<Req, Res>(
  url: string,
  method: "POST" | "GET",
  body: Req,
  errorMessage: string,
): Promise<Res | null> {
  let responseJson: Res | null = null;

  await fetch(url, {
    method: method,
    mode: "no-cors",
    body: JSON.stringify(body),
  })
    .then(async (res) => {
      responseJson = await res.json() as Res;
    })
    .catch((e) => {
      alert(errorMessage);
      console.error(errorMessage, responseJson, e);
    });

  return responseJson;
}
