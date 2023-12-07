import * as request from "../lib/request";

// const baseUrl = "http://localhost:3030/jsonstore/locations"; URL without authentication
const baseUrl = "http://localhost:3030/data/locations";


export const getAll = async () => {
  const result = await request.get(baseUrl);

  return Object.values(result);
};

export const create = async (locationData) => {
  const result = await request.post(baseUrl, locationData);

  return result;
};

export const getOne = async (locationId) => {
  const result = await request.get(`${baseUrl}/${locationId}`, );

  return result;
}

export const edit = async (locationId, locationData) =>{
  const result = await request.put(`${baseUrl}/${locationId}`, locationData)

  return result
}

export const remove = async (locationId) => request.remove(`${baseUrl}/${locationId}`);

export const getLatest = async () => {
  const query = encodeURIComponent(`offset=0&pageSize=3`);
  console.log(query);
  const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&${query}`)

  return  result
}