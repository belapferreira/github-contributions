import React from 'react';
import { render } from '@testing-library/react';

import Contributions from '../../pages/Contributions';

describe('Contributions Page', () => {
  it('should be able to render all html of the page', () => {
    const { debug } = render(<Contributions />);

    debug();
  });
});
