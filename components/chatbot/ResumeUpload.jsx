'use client';
import { useRef, useState } from 'react';
import { IoCloudUploadOutline, IoDocumentTextOutline } from 'react-icons/io5';
import { getOrCreateSessionId } from '@/lib/session';
import { uploadResume } from '@/lib/chatApi';
import { MAX_FILE_SIZE, ALLOWED_FILE_TYPES, ALLOWED_EXTENSIONS } from '@/lib/constants';

// Resume upload tab. Validates type + size on the client BEFORE the
// network roundtrip, then posts FormData (same sessionId as the chat).
const ResumeUpload = ({ onUploaded }) => {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const validate = (f) => {
    const ext = '.' + f.name.split('.').pop().toLowerCase();
    const typeOk = Boolean(ALLOWED_FILE_TYPES[f.type]) || ALLOWED_EXTENSIONS.includes(ext);
    if (!typeOk) return 'Only PDF, DOC, DOCX files allowed.';
    if (f.size > MAX_FILE_SIZE) return 'File too large (max 5 MB).';
    return null;
  };

  const onPick = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const err = validate(f);
    if (err) {
      setError(err);
      setFile(null);
    } else {
      setError(null);
      setFile(f);
    }
    e.target.value = ''; // allow re-picking the same file after an error
  };

  const submit = async () => {
    if (!file || isUploading) return;
    setIsUploading(true);
    setError(null);
    try {
      const data = await uploadResume({ sessionId: getOrCreateSessionId(), file });
      const name = data?.upload?.originalName || file.name;
      onUploaded?.(`📄 "${name}" uploaded. Thanks — I'll take a look and follow up!`);
    } catch (err) {
      setError(err.message || 'Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-5">
      <p className="font-Ovo text-sm opacity-80">
        Want to refer me for a role? Upload a JD or resume (PDF, DOC, DOCX — max 5 MB) and I&apos;ll
        follow up.
      </p>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-400 py-8 transition hover:bg-lightHover dark:border-white/30 dark:hover:bg-white/5"
      >
        {file ? <IoDocumentTextOutline size={28} /> : <IoCloudUploadOutline size={28} />}
        <span className="px-4 text-center text-sm break-all">
          {file ? file.name : 'Click to choose a file'}
        </span>
        {file && <span className="text-xs opacity-60">{(file.size / 1024 / 1024).toFixed(2)} MB</span>}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        onChange={onPick}
        className="hidden"
      />

      {error && <p className="text-xs text-red-500 dark:text-red-400">{error}</p>}

      <button
        type="button"
        onClick={submit}
        disabled={!file || isUploading}
        className="mt-auto rounded-full bg-darkHover py-2.5 font-Ovo text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
      >
        {isUploading ? 'Uploading…' : 'Upload resume'}
      </button>
    </div>
  );
};

export default ResumeUpload;
