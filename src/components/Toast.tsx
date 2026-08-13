import React from 'react';
import { Sparkles } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="toast-floating-container" onClick={onClose}>
      <div className="toast-item">
        <Sparkles size={18} color="var(--gold-light)" />
        <span>{message}</span>
      </div>
    </div>
  );
};
