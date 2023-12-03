import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/reviews';

export const getAll = async (locationId) => {
    const query = new URLSearchParams({
        where: `locationId="${locationId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (locationId, text) => {
    const newReview = await request.post(baseUrl, {
        locationId,
        text,
    });

    return newReview;
};