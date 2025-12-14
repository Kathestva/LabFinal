import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('API Tests - JSONPlaceholder', () => {

  test('GET /posts - obtener lista de posts', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
  });

  test('GET /posts/1 - obtener un post por ID', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/1`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('body');
    expect(body).toHaveProperty('userId');
  });

  test('POST /posts - crear un nuevo post', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/posts`, {
      data: {
        title: 'Post de prueba',
        body: 'Contenido del post',
        userId: 1
      }
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.title).toBe('Post de prueba');
    expect(body.body).toBe('Contenido del post');
    expect(body.userId).toBe(1);
    expect(body).toHaveProperty('id');
  });

  test('PUT /posts/1 - actualizar un post', async ({ request }) => {
    const response = await request.put(`${BASE_URL}/posts/1`, {
      data: {
        id: 1,
        title: 'Post actualizado',
        body: 'Contenido actualizado',
        userId: 1
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.title).toBe('Post actualizado');
    expect(body.body).toBe('Contenido actualizado');
  });

  test('DELETE /posts/1 - eliminar un post', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/posts/1`);

    expect(response.status()).toBe(200);
  });

});
