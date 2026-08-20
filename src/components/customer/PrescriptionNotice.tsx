import React, { useState } from 'react';
import { AlertTriangle, Upload, Check, FileText } from 'lucide-react';
import { soundEffects } from '../../services/audioService';

interface PrescriptionNoticeProps {
  requiresPrescription?: boolean;
}

export const PrescriptionNotice: React.FC<PrescriptionNoticeProps> = ({ requiresPrescription }) => {
  const [fileUploaded, setFileUploaded] = useState(false);

  if (!requiresPrescription) return null;

  const handleUploadSim = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileUploaded(true);
      soundEffects.playSuccessChime();
    }
  };

  return (
    <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 space-y-3">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 font-black text-xs">
          Rx
        </div>
        <div>
          <h4 className="font-bold text-sm text-rose-900 flex items-center gap-1.5">
            <span>Prescription Required (Schedule H / H1 Drug)</span>
            <AlertTriangle className="w-4 h-4 text-rose-600" />
          </h4>
          <p className="text-xs text-rose-700 mt-0.5 leading-relaxed">
            As per Government of India Drugs and Cosmetics Rules, this medicine can only be dispensed by licensed neighborhood chemists upon verification of a valid registered medical practitioner’s prescription.
          </p>
        </div>
      </div>

      <div className="pt-2 border-t border-rose-200/60 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-xs text-rose-800">
          {fileUploaded ? (
            <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
              <Check className="w-4 h-4 text-emerald-600" />
              Prescription Attached (Verified for Local Chemist)
            </span>
          ) : (
            <span>Upload or present your doctor’s slip during pickup or home delivery</span>
          )}
        </div>

        <label className="cursor-pointer px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm">
          <Upload className="w-3.5 h-3.5" />
          <span>{fileUploaded ? 'Change Prescription' : 'Upload Doctor Slip'}</span>
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={handleUploadSim}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};
