import Icon from '..';
import {render} from '@testing-library/react';

describe('Icon', () => {
  test('basic', () => {
    const {container} = render(<Icon type="share"/>);
    expect(container).toMatchSnapshot();
  });
});
