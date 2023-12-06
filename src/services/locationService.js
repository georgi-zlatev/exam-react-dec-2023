import * as request from "../lib/request";

// const baseUrl = "http://localhost:3030/jsonstore/locations";
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