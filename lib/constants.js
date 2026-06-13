
export const MAX_MESSAGE_LENGTH = 2000; // chars per message
export const MAX_MESSAGES = 30; // messages sent per chat request
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

// MIME types the backend accepts, mapped to a friendly label
export const ALLOWED_FILE_TYPES = {
  'application/pdf': 'PDF',
  'application/msword': 'DOC',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'DOCX',
};

export const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];
