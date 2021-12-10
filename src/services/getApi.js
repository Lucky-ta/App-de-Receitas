export default async function getApi(api) {
  const result = await fetch(api);
  const resultJson = await result.json();
  return resultJson;
}
