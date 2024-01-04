// tests/server.test.ts

import request from 'supertest';
import app from '../src/index';

describe('Stocks Server API tests', () => {


    it('should return "Health check! Welcome to Stocks Server!" on GET /', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Health check! Welcome to Stocks Server!');
    });

    it('should return "Stock Level value for given stock, " on GET /', async () => {
        let skuString = 'KED089097/68/09'
        const response = await request(app).get(`/api/v1/stocks/${skuString}`);
        // console.log(response.body)
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.objectContaining({
            stock: expect.any(Number),
            sku: expect.any(String)
        }))
    });

    it('should return "Error Stock Level value for given stock Not Found, " on GET /', async () => {
        let skuString = 'KED089097/60008/09'
        const response = await request(app).get(`/api/v1/stocks/${skuString}`);
        // console.log(response.body)
        let errorMessage = `SKU: ${skuString} does not exist`
        expect(response.status).toBe(500);

        expect(response.body).toEqual(expect.objectContaining({
            message: expect.any(String)
        }))
        expect(response.body.message).toEqual(errorMessage)
    });
});


