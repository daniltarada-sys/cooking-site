import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string; 
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col mb-5">
        <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>
        <input 
          ref={ref} 
          className={`px-4 py-3 rounded-xl border-2 bg-white outline-none transition-colors
            ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-brand'}`} 
          {...props} 
        />
        {error && <span className="text-red-500 text-xs mt-1.5 font-medium">{error}</span>}
      </div>
    );
  }
);