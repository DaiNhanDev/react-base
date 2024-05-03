import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

const { common } = translations;
export const messages = {
  selectLanguage: () =>
    _t(
      common.selectLanguage,
      'Select Language', // default value
    ),
};
