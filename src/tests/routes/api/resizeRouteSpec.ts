import request from 'supertest';
import app from '../../../index';

describe('Test resize EndPoint', function (): void {
  it('tests the response for valid image name', async function (): Promise<void> {
    const response = await request(app).get(
      '/api/resize?filename=fjord.jpg&width=200&height=150'
    );
    expect(response.status).toEqual(200);
  });

  it('tests the response for invalid image name', async function (): Promise<void> {
    const response = await request(app).get(
      '/api/resize?filename=ord.jpg&width=200&height=150'
    );
    expect(response.status).toEqual(500);
  });
});
