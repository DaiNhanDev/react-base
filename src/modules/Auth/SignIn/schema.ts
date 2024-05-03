import { translations } from 'locales/translations';
import * as yup from 'yup';

const { validation } = translations;
const scheme = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required(validation.fieldRequired)
    .email(validation.sign_in.email_format),
  password: yup
    .string()
    .trim()
    .required(validation.fieldRequired)
    .min(6, validation.sign_in.min_password),
});

export default scheme;
