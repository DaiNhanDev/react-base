import AxiosMockAdapter from 'axios-mock-adapter';
import { httpApi } from 'apis/http.api';

export const httpApiMock = new AxiosMockAdapter(httpApi, {
  delayResponse: 1000,
});
