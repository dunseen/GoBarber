import { ValidationError } from "yup";

interface Erros {
  [keyof: string]: string;
}

export default function getValidationErrors(err: ValidationError): Erros {
  const validationErros: Erros = {};

  err.inner.forEach((error) => {
    validationErros[error.path] = error.message;
  });

  return validationErros;
}
