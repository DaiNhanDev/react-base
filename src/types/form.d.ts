export type FormType = 'input' | 'select';
export interface FormColumns {
  name: string;
  label: string;
  required: boolean;
  formType: FormType;
}
