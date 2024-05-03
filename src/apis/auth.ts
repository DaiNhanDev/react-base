import AxiosClient from './axiosClient';
import END_POINT from './endpoint';

const login = (body: { email: string; password: string }) => {
  return AxiosClient.post(END_POINT.AUTH.LOGIN, body);
};

const getMe = () => {
  return AxiosClient.get(END_POINT.AUTH.GET_ME);
};

export { login, getMe };
