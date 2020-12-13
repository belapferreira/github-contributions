import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Contributions from '../../pages/Contributions';

describe('Contributions Page', () => {
  it('should be able to render all html of the page', () => {
    const { debug } = render(<Contributions />);

    debug();
  });

  it('should be able to switch year on change', async () => {
    const { getByTestId } = render(<Contributions />);

    const select = getByTestId('select');

    fireEvent.change(select, { target: { value: '2016' } });

    await waitFor(() => {
      expect(select).toHaveTextContent('2016');
    });
  });
});
