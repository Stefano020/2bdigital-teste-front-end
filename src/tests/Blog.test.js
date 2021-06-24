import { render } from '@testing-library/react';
import App from '../App';

describe('1 - Testing Blog Component Header section', () => {
  it('test if logo name is tinyone', () => {
    const { getByText } = render(<App />);
  
    const headerLogoName = getByText('tinyone');
  
    expect(headerLogoName).toBeInTheDocument();
  });

  it('test if buttons menu exist', () => {
    const { getByRole } = render(<App />);

    const featuresLink = getByRole('heading', { name: 'Features' });
    const supportLink = getByRole('heading', { name: 'Support' });
    const blogLink = getByRole('heading', { name: 'Blog' })


    expect(featuresLink).toBeInTheDocument();
    expect(supportLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
  });
});

describe('2 - Testing Blog Component Main section', () => {
  it('test if Blog title to be correct', () => {
    const { getByText } = render(<App />);

    const blogTitle = getByText('Inspire your inspiration');

    expect(blogTitle).toBeInTheDocument();
  });

  it('test if blog subtitle to be correct', () => {
    const { getByText } = render(<App />);

    const blogTitle = getByText(
      'Simple to use for your app, products showcase and your inspiration'
    );

    expect(blogTitle).toBeInTheDocument();
  });

  it('test if blog paragraph to be correct', () => {
    const { getByText } = render(<App />);

    const blogParagraph = getByText(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volupat tempor. In quis arcu et eros porta lobortis sit'
    )

    expect(blogParagraph).toBeInTheDocument();
  });

  it('test if Apple, Android and Windows links exists', () => {
    const { getByAltText } = render(<App />);

    const appleLink = getByAltText('Apple icon');
    const androidLink = getByAltText('Android icon');
    const windowsLink = getByAltText('Windows icon');

    expect(appleLink).toBeInTheDocument();
    expect(androidLink).toBeInTheDocument();
    expect(windowsLink).toBeInTheDocument();
  });

  it('test if Apple, Android and Windows links get to the correct link', () => {
    const { getByAltText } = render(<App />);

    const appleLink = getByAltText('Apple icon');
    const androidLink = getByAltText('Android icon');
    const windowsLink = getByAltText('Windows icon');

    expect(appleLink.closest('a')).toHaveAttribute('href', 'https://apps.apple.com/us/app/apple-store/id375380948');
    expect(androidLink.closest('a')).toHaveAttribute('href', 'https://play.google.com/store');
    expect(windowsLink.closest('a')).toHaveAttribute('href', 'https://www.microsoft.com/en-us/store/apps/windows');
  })

  it('test if ipad image exists', () => {
    const { getByAltText } = render(<App />);

    const ipadImage = getByAltText('Tablet with app logo and name');

    expect(ipadImage).toBeInTheDocument();
  });

  it('test if carousel exists', () => {
    const { getAllByTestId } = render(<App />);

    const carouselDots = getAllByTestId('blog-carousel');

    expect(carouselDots.length).toBe(3);
  })
})




