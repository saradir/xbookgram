const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

export async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const isFormData = options?.body instanceof FormData;
  const token = localStorage.getItem('token');
  const headers = new Headers(options?.headers);
  if (!isFormData) {
    headers.set('Content-Type', 'application/json');
  }
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error ?? 'Something went wrong');
  }

  return data.data as T;
}
