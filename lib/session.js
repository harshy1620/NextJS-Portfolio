// Manages the per-visitor session id the backend uses to group a
// conversation (chats + uploads). Persisted in localStorage so it
// survives refreshes; a new device / incognito gets a fresh id.

const STORAGE_KEY = 'chat_session_id';

function generateUUID() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  // RFC4122 v4 fallback for older browsers
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function getOrCreateSessionId() {
  if (typeof window === 'undefined') return null;
  try {
    let id = localStorage.getItem(STORAGE_KEY);
    if (!id) {
      id = generateUUID();
      localStorage.setItem(STORAGE_KEY, id);
    }
    return id;
  } catch {
    // localStorage blocked (rare) — fall back to an ephemeral id
    return generateUUID();
  }
}
