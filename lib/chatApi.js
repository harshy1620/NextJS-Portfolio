// Thin fetch wrappers around the backend. Each function returns the
// parsed JSON on success and throws an ApiError (carrying the backend's
// own message + status) on failure, so the UI can show specific text.

import { API_URL } from '@/lib/config';

export class ApiError extends Error {
  constructor(message, status, code) {
    super(message);
    this.name = 'ApiError';
    this.status = status; // 0 == network/no-response
    this.code = code; // optional backend error code
  }
}

function defaultMessageForStatus(status) {
  if (status === 429) return 'Too many requests. Please try again in a minute.';
  if (status >= 500) return 'Something went wrong. Please try again.';
  return 'Request failed. Please try again.';
}

async function parseJsonSafe(res) {
  try {
    return await res.json();
  } catch {
    return null;
  }
}

// POST /chat — sends the FULL message history; returns { reply, meta }
export async function sendChat({ sessionId, messages }) {
  let res;
  try {
    res = await fetch(`${API_URL}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, messages }),
    });
  } catch {
    throw new ApiError('Connection issue. Please try again.', 0);
  }

  const data = await parseJsonSafe(res);
  if (!res.ok) {
    throw new ApiError(data?.error || defaultMessageForStatus(res.status), res.status, data?.code);
  }
  return data;
}

// POST /upload-resume — multipart; returns { ok, upload, conversationId }
export async function uploadResume({ sessionId, file }) {
  const form = new FormData();
  form.append('sessionId', sessionId);
  form.append('resume', file);

  let res;
  try {
    // No Content-Type header — the browser sets multipart/form-data + boundary
    res = await fetch(`${API_URL}/upload-resume`, { method: 'POST', body: form });
  } catch {
    throw new ApiError('Connection issue. Please try again.', 0);
  }

  const data = await parseJsonSafe(res);
  if (!res.ok) {
    throw new ApiError(data?.error || defaultMessageForStatus(res.status), res.status, data?.code);
  }
  return data;
}
