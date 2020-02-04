import React, {useState, useEffect} from 'react'

import { FaGithub, FaSpinner } from 'react-icons/fa'

import {
  Wrapper,
  Title,
  ReposDiv,
  RepoWrapper,
  RepoName,
  CreateAt,
  GithubIcon,
  Language,
  LoadingDiv,
} from './styles';

interface Props {
  name: string,
  description: string,
  url: string,
  language: string,
  created_at: string,
  keyProp: number,
}


const Repo: React.FC<Props> = (props: Props) => {
  const { name, url, language, created_at, keyProp} = props;

  const parseDate = (input: string) => {
    const parts: any = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  };


  const formatDate = (uploadedOn: string) => {
    const dateFormatted = parseDate(uploadedOn);
    const months = [
      'January',
      'February',
      'March',
      'April',
      'may',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return `${months[dateFormatted.getMonth()]} ${dateFormatted.getDate()} ${dateFormatted.getFullYear()}`;
  };
  let card;

  if (keyProp % 3 === 0) {
    card = (
      <RepoWrapper className="left" href={url} target="_blank">
        <GithubIcon href={`${url}`} target="_blank">
          <FaGithub />
        </GithubIcon>
        <RepoName>{name}</RepoName>
        <Language>{language}</Language>
        <br/>
        <CreateAt>{formatDate(created_at)}</CreateAt>
      </RepoWrapper>
    );
  }
  if (keyProp % 3 === 1) {
    card = (
      <RepoWrapper className="center" href={url} target="_blank">
        <GithubIcon href={`${url}`} target="_blank">
          <FaGithub />
        </GithubIcon>
        <RepoName>{name}</RepoName>
        <Language>{language}</Language>
        <br/>
        <CreateAt>{formatDate(created_at)}</CreateAt>
      </RepoWrapper>
    );
  }
  if (keyProp % 3 === 2) {
    card = (
      <RepoWrapper className="right" href={url} target="_blank">
        <GithubIcon href={`${url}`} target="_blank">
          <FaGithub />
        </GithubIcon>
        <RepoName>{name}</RepoName>
        <Language>{language}</Language>
        <br/>
        <CreateAt>{formatDate(created_at)}</CreateAt>
      </RepoWrapper>
    );
  }

  return (
    <>
      {card}
    </>
  );
}


const Repos: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false);

  const getRepos = async (username: string) => {
    const res: any = await fetch(`https://api.github.com/users/${username}/repos`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setRepos(data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getRepos('Davi-Silva')
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title>
              Github Repositories
            </Title>
            {loading ? (
              <LoadingDiv>
                <FaSpinner />
              </LoadingDiv>
            ) : (
              <ReposDiv>
              {repos.map((repo, key) => (
                <Repo
                  key={repo.id}
                  name={repo.name}
                  description={repo.description}
                  url={repo.html_url}
                  language={repo.language}
                  created_at={repo.created_at}
                  keyProp={key}
                />
              ))}
              </ReposDiv>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Repos;