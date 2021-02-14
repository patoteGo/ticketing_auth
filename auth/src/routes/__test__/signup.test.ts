import request from 'supertest';
import { app } from '../../app';

it('return a 201 on sucessfull signup', async () => request(app)
  .post('/api/users/signup')
  .send({
    email: 'test@test.com',
    password: 'password',
  })
  .expect(201)
 );
  
it('return a 400 with invalid email', async () => {
  return request(app)
  .post('/api/users/signup')
  .send({
    email: 'akljsdlkjas',
    password: 'password'
  })
  .expect(400);
})

it('return a 400 with invalid password', async () => {
  return request(app)
  .post('/api/users/signup')
  .send({
    email: 'email@email.com',
    password: 'p'
  })
  .expect(400);
})

it('return a 400 with missing email and password', async () => {
  await request(app)
  .post('/api/users/signup')
  .send({
    email: 'test@email.com'
  })
  .expect(400);
  return request(app)
  .post('/api/users/signup')
  .send({
    password: 'password'
  })
  .expect(400);
})

it('disallows duplicate emails', async () => {
  await request(app)
  .post('/api/users/signup')
  .send({
    email: 'test@email.com',
    password: 'password'
  })
  .expect(201);

  await request(app)
  .post('/api/users/signup')
  .send({
    email: 'test@email.com',
    password: 'password'
  })
  .expect(400);
});

it('sets a cookie after succesfull signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@email.com',
      password: 'password'
    })    
    .expect(201);
  expect(response.get('Set-Cookie')).toBeDefined();
})