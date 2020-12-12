import React from 'react';

import { Container, GithubLogo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <GithubLogo />
      <h1>Contributions</h1>
    </Container>
  );
};

export default Header;
