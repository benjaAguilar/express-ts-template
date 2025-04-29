import router from '../routes/indexRoute';
import request from 'supertest';
import express from 'express';

const app = express();
app.use('/', router);

describe('Index route', () => {
  it('should return JSON with { route: true }', async () => {
    await request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({ route: true });
  });
});
