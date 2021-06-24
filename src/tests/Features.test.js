import { render } from '@testing-library/react';
import App from '../App';

describe('1 - testing Features title and subtitle section', () => {
  it('test if Features component title is correct', () => {
    const { getByText } = render(<App />);

    const featuresTitle = getByText('Tinyone features');

    expect(featuresTitle).toBeInTheDocument();
  });

  it('test if Features component subtitle is correct', () => {
    const { getByText } = render(<App />);

    const featuresSubtitle = getByText(
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.'
    );

    expect(featuresSubtitle).toBeInTheDocument();
  });
});

describe('2 - testing Features cards', () => {
  it('test if all six images from cards are correct', () => {
    const { getByAltText } = render(<App />);

    const firstCardIcon = getByAltText('Tablet icon');
    const secondCardIcon = getByAltText('Layer icon');
    const thirdCardIcon = getByAltText('File icon');
    const fourthCardIcon = getByAltText('Html icon');
    const fifthCardsIcon = getByAltText('Email icon');
    const sixthCardIcon = getByAltText('Download icon');

    expect(firstCardIcon).toBeInTheDocument();
    expect(secondCardIcon).toBeInTheDocument();
    expect(thirdCardIcon).toBeInTheDocument();
    expect(fourthCardIcon).toBeInTheDocument();
    expect(fifthCardsIcon).toBeInTheDocument();
    expect(sixthCardIcon).toBeInTheDocument();
  })

  it('test if all six titles from cards are correct', () => {
    const { getByText } = render(<App />);

    const firstCardTitle = getByText('Fully Responsive');
    const secondCardTitle = getByText('Fully Layered PSD');
    const thirdCardTitle = getByText('Font Awesome Icons');
    const fourthCardTitle = getByText('HTML3 & CSS3');
    const fifthCardsTitle = getByText('Email Template');
    const sixthCardTitle = getByText('Free to download');

    expect(firstCardTitle).toBeInTheDocument();
    expect(secondCardTitle).toBeInTheDocument();
    expect(thirdCardTitle).toBeInTheDocument();
    expect(fourthCardTitle).toBeInTheDocument();
    expect(fifthCardsTitle).toBeInTheDocument();
    expect(sixthCardTitle).toBeInTheDocument();
  })

  it('test if all six paragraphs from cards are correct', () => {
    const { getByText } = render(<App />);

    const firstCardParagraph = getByText(
      '1 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.'
    );
    const secondCardParagraph = getByText(
      '2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.'
    );
    const thirdCardParagraph = getByText(
      '3 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.'
    );
    const fourthCardParagraph = getByText(
      '4 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.'
    );
    const fifthCardsParagraph = getByText(
      '5 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.'
    );
    const sixthCardParagraph = getByText(
      '6 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab possimus deleniti nulla error eligendi exercitationem amet necessitatibus.'
    );

    expect(firstCardParagraph).toBeInTheDocument();
    expect(secondCardParagraph).toBeInTheDocument();
    expect(thirdCardParagraph).toBeInTheDocument();
    expect(fourthCardParagraph).toBeInTheDocument();
    expect(fifthCardsParagraph).toBeInTheDocument();
    expect(sixthCardParagraph).toBeInTheDocument();
  });
});