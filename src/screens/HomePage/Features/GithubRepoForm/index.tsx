import React, { useEffect } from 'react';
import { FormLabel } from 'components/FormLabel';
import { LoadingIndicator } from 'components/LoadingIndicator';
import { RepoItem } from './RepoItem';
import { RepoErrorType } from './slice/types';
import { useGithubRepoFormSlice } from './slice';
// import { useUserSlice } from 'slices';
import {
  List,
  FormGroup,
  ErrorText,
  InputWrapper,
  Wrapper,
  Input,
} from './styled';

export const repoErrorText = (error: RepoErrorType) => {
  switch (error) {
    case RepoErrorType.USER_NOT_FOUND:
      return 'There is no such user 😞';
    case RepoErrorType.USERNAME_EMPTY:
      return 'Type any Github username';
    case RepoErrorType.USER_HAS_NO_REPO:
      return 'User has no repository 🥺';
    case RepoErrorType.GITHUB_RATE_LIMIT:
      return 'Looks like github api`s rate limit(60 request/h) has exceeded 🤔';
    default:
      return 'An error has occurred!';
  }
};

export const GithubRepoForm: React.FC = () => {
  const { loadRepos, changeUsername, username, repos, isLoading, error } =
    useGithubRepoFormSlice();

  // const { users } = useUserSlice();
  // console.log('======> update users: ', users);
  const onChangeUsername = (evt: React.ChangeEvent<HTMLInputElement>) => {
    changeUsername(evt.currentTarget.value);
    loadRepos();
  };

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) {
      loadRepos();
      // loadUsers();
    }
  });

  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
  };

  return (
    <Wrapper>
      <FormGroup onSubmit={onSubmitForm}>
        <FormLabel>Github Username</FormLabel>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Type any Github username"
            value={username}
            onChange={onChangeUsername}
          />
          {isLoading && <LoadingIndicator small />}
        </InputWrapper>
      </FormGroup>
      {repos?.length > 0 ? (
        <List>
          {repos.map((repo) => (
            <RepoItem
              key={repo.id}
              name={repo.name}
              starCount={repo.stargazers_count}
              url={repo.html_url}
            />
          ))}
        </List>
      ) : error ? (
        <ErrorText>{repoErrorText(error)}</ErrorText>
      ) : null}
    </Wrapper>
  );
};
