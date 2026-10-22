import React from 'react';
import { X, Lock, Mail, ShieldAlert } from 'lucide-react';
import { SCHOOL_INFO } from '../data/contentInventory';

interface SchoolPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SchoolPortalModal: React.FC<SchoolPortalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portal-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full bg-[#F7F4EC] rounded-2xl overflow-hidden shadow-2xl border border-[#23483D]/20 text-[#28332E]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-[#23483D] text-[#F7F4EC]">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#D7B66E]" />
            <h3 id="portal-modal-title" className="font-serif text-base font-bold">
              School Administrative Portal
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#F7F4EC]/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-sm">
          <div className="p-3 bg-[#E5EBE1] rounded-xl flex items-start gap-3 text-xs text-[#28332E]">
            <ShieldAlert className="w-4 h-4 text-[#B96F52] shrink-0 mt-0.5" />
            <div>
              <strong>Original Site Notice:</strong> The original website contained a generic Wix member popup (<em>popup-lka74</em>) with unconfigured external authentication.
            </div>
          </div>

          <p className="text-xs text-[#28332E]/80 leading-relaxed">
            Alpha Friendship School credentials for faculty records, student registries, and residential admissions are managed on-campus by the school administrative office in Kachai.
          </p>

          <div className="border border-[#28332E]/10 rounded-xl p-4 bg-white space-y-2">
            <div className="text-xs font-semibold text-[#23483D] uppercase tracking-wider">
              Authorized Inquiries
            </div>
            <p className="text-xs text-[#28332E]/70">
              Staff, parents, or verified educational partners requiring direct access may contact the administration:
            </p>
            <div className="pt-2 text-xs font-medium space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#23483D]" />
                <a href={`mailto:${SCHOOL_INFO.contact.email}`} className="text-[#23483D] hover:underline">
                  {SCHOOL_INFO.contact.email}
                </a>
              </div>
              <div className="text-[#28332E]/60 pl-5.5">
                Ref: Staff Portal & Records Verification
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-3 bg-[#FAF8F2] border-t border-[#28332E]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium bg-[#23483D] text-[#F7F4EC] rounded-lg hover:bg-[#19342C] transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
