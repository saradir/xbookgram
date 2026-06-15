const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

export async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const isFormData = options?.body instanceof FormData;
  const res = await fetch(`${BASE_URL}${path}`, {
    credentials: 'include', // sends JWT cookie automatically
    ...options,
    headers: { ...(!isFormData && { 'Content-Type': 'application/json' }) },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error ?? 'Something went wrong');
  }

  return data.data as T;
}
