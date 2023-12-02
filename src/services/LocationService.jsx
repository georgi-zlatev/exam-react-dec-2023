import * as request from "../lib/request";

const baseUrl = "mongodb://127.0.0.1:27017/local-food-events";

export const getAll = async () => {
  const result = await request.get(`${baseUrl}/locations`);

  return Object.values(result);
};

export const create = async (locationData) => {
  const result = await request.post(`${baseUrl}/locations`, locationData);

  return result;
};

export const getOne = async (locationId) => {
  const result = await request.get(`${baseUrl}/locations/${locationId}`, );

  return result;
}