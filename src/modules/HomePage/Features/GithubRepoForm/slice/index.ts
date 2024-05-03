import { PayloadAction } from '@reduxjs/toolkit';
import { Repo } from 'types/Repo';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useSelector, useDispatch } from 'react-redux';

import { UserModel } from 'models';
import { githubRepoFormSaga } from './saga';
import { GithubRepoFormState, RepoErrorType } from './types';
import {
  selectUsername,
  selectRepos,
  selectLoading,
  selectError,
  selectUsers,
} from './selectors';

export const initialState: GithubRepoFormState = {
  username: 'react-boilerplate',
  repositories: [],
  loading: false,
  error: null,
  users: [],
};

const slice = createSlice({
  name: 'githubRepoForm',
  initialState,
  reducers: {
    changeUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    loadRepos(state) {
      state.loading = true;
      state.error = null;
      state.repositories = [];
    },
    reposLoaded(state, action: PayloadAction<Repo[]>) {
      const repos = action.payload;
      state.repositories = repos;
      state.loading = false;
    },
    repoError(state, action: PayloadAction<RepoErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },
    loadUsers: (state) => {
      state.loading = true;
      state.error = null;
      state.users = [];
    },
    usersLoaded: (state, action: PayloadAction<UserModel[]>) => {
      state.loading = false;
      state.loading = true;
      state.error = null;
      state.users = action.payload;
    },
  },
});

export const { actions: githubRepoFormActions, reducer } = slice;

export const useGithubRepoFormSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: githubRepoFormSaga });
  const { actions } = slice;
  const dispatch = useDispatch();
  const loadRepos = () => dispatch(actions.loadRepos());

  const changeUsername = (payload: string) =>
    dispatch(actions.changeUsername(payload));
  const loadUsers = () => dispatch(actions.loadUsers());

  const username = useSelector(selectUsername);
  const repos = useSelector(selectRepos);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const users = useSelector(selectUsers);

  return {
    loadRepos,
    changeUsername,
    loadUsers,
    username,
    repos,
    isLoading,
    error,
    users,
  };
};
