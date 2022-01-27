const request = require('supertest');
const app = require('../app.js');

describe('health check test', () => {
  it('should return OK', async () => {
    const response = await request(app).get('/api/health-check');
    expect(response.statusCode).toEqual(200);
  });
});

describe('Genders API', () => {
  it('should show all genders', async () => {
    const res = await request(app).get('/api/genders');
    expect(res.statusCode).toEqual(200);
  });
});

describe('Users API', () => {
  it('should create a new user', async () => {
    const res = await request(app).post('/api/users').send({
      first_name: 'John',
      last_name: 'Doe',
      birthday: '2022-01-27',
      password: '1234',
      genderId: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('birthday');
  });

  it('should show all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(1);
  });

  it('should show one user', async () => {
    const res = await request(app).get('/api/users/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('first_name');
  });

  it('should update a user', async () => {
    const res = await request(app).put('/api/users').send({
      user_id: 1,
      first_name: 'Foo',
      last_name: 'Bar',
      birthday: '2022-01-27',
      password: '1234',
      genderId: 1,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.first_name).toEqual('Foo');
  });

  it('should delete a user', async () => {
    const res = await request(app).delete('/api/users/1');
    expect(res.statusCode).toEqual(204);
  });
});
