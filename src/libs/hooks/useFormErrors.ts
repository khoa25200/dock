// src/hooks/useFormErrors.ts
import { useState } from 'react';

const useFormErrors = () => {
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const setFieldError = (field: string, message: string | null) => {
    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const clearErrors = () => {
    setErrors({});
  };

  return {
    errors,
    setFieldError,
    clearErrors,
  };
};

export default useFormErrors;
