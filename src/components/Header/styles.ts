import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #24292e;
  padding: 12px 16px;

  h1 {
    color: #ffffff;
    font-size: 24px;
    margin-left: 12px;
  }
`;

export const GithubLogo = styled(FaGithub)`
  fill: #ffffff;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;
