import { render } from '@testing-library/react';
import App from './App';

test('renders Main page', () => {
  const { getByText } = render(<App />);

  const blogTitle = getByText('Inspire your inspiration');
  
  expect(blogTitle).toBeInTheDocument();
});
