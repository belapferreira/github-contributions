import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import ContributionsMain from '../../pages/ContributionsMain';

describe('Contributions Page', () => {
  it('should be able to render all html of the page', () => {
    const { debug } = render(<ContributionsMain />);

    debug();
  });

  it('should be able to switch year on change', async () => {
    const { getByTestId } = render(<ContributionsMain />);

    const select = getByTestId('select');

    fireEvent.change(select, { target: { value: '2016' } });

    await waitFor(() => {
      expect(select).toHaveTextContent('2016');
    });
  });
});
