export default getApi = async (api) => {
  const result = await fetch(api);
  const resultJson = await result.json();
  return resultJson;
};
