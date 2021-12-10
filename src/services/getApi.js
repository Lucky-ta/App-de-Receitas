export default async function getApi(api) {
  try {
    const result = await fetch(api);
    const resultJson = await result.json();
    return resultJson;
  } catch (error) {
    console.log(error);
  }
}
