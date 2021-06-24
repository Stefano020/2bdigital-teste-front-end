import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('1 - testing Support component title and subtitle section', () => {
  it('test if title is correct', () => {
    const { getByText } = render(<App />);

    const supportTitle = getByText('Keep in touch with us');

    expect(supportTitle).toBeInTheDocument();
  });

  it('test if subtitle is correct', () => {
    const { getByText } = render(<App />);

    const featuresSubtitle = getByText(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facilis eum quos aliquid commodi consequatur quae, saepe iure quia labore ipsum dolore.'
    );

    expect(featuresSubtitle).toBeInTheDocument();
  });
});

describe('2 - testing Support component email input section', () => {
  it('test if email input exists', () => {
    const { getByPlaceholderText } = render(<App />);

    const emailIput = getByPlaceholderText('Enter your email to update');

    expect(emailIput).toBeInTheDocument();
  });

  it('test if email input is able to write', () => {
    const { getByPlaceholderText } = render(<App />);

    const emailIput = getByPlaceholderText('Enter your email to update');
    fireEvent.change(emailIput, { target: { value: 'teste@teste.com' } });

    expect(emailIput.value).toBe('teste@teste.com');
    
  });

  it('test if submit button exists', () => {
    const { getByRole } = render(<App />);

    const submitButton = getByRole('button', { name: 'SUBMIT' });

    expect(submitButton).toBeInTheDocument();
  });

  it('test if submit button is disabled', () => {
    const { getByRole } = render(<App />);

    const submitButton = getByRole('button', { name: 'SUBMIT' });

    expect(submitButton).toBeDisabled();
  })

  it('test if submit button be disabled on invalid email', () => {
    const { getByPlaceholderText, getByRole } = render(<App />);

    const emailIput = getByPlaceholderText('Enter your email to update');
    const submitButton = getByRole('button', { name: 'SUBMIT' });

    fireEvent.change(emailIput, { target: { value: 'testeteste.com' } });
    expect(submitButton).toBeDisabled();

    fireEvent.change(emailIput, { target: { value: 'teste@testecom' } });
    expect(submitButton).toBeDisabled();

    fireEvent.change(emailIput, { target: { value: 'teste@.com' } });
    expect(submitButton).toBeDisabled();
  });

  it('test if submit button be able on valid email', () => {
    const { getByPlaceholderText, getByRole } = render(<App />);

    const emailIput = getByPlaceholderText('Enter your email to update');
    const submitButton = getByRole('button', { name: 'SUBMIT' });

    fireEvent.change(emailIput, { target: { value: 'teste@teste.com' } });
    expect(submitButton).not.toBeDisabled();

    fireEvent.change(emailIput, { target: { value: 'teste2@teste.com' } });
    expect(submitButton).not.toBeDisabled();

    fireEvent.change(emailIput, { target: { value: 'teste_3@teste.com' } });
    expect(submitButton).not.toBeDisabled();
  });

  it('test if email input get clean when click on submit button', () => {
    const { getByPlaceholderText, getByRole } = render(<App />);

    const emailIput = getByPlaceholderText('Enter your email to update');
    const submitButton = getByRole('button', { name: 'SUBMIT' });

    fireEvent.change(emailIput, { target: { value: 'teste@teste.com' } });
    fireEvent.click(submitButton);

    expect(emailIput.value).toBe('');
  })
});

describe('3 - testing Support component social medias section', () => {
  it('test if social media icons exist', () => {
    const { getByAltText } = render(<App />);

    const facebookIcon = getByAltText('Facebook icon');
    const twitterIcon = getByAltText('Twitter icon');
    const googleIcon = getByAltText('Google icon');
    const pinterestIcon = getByAltText('Pinterest icon');

    expect(facebookIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(googleIcon).toBeInTheDocument();
    expect(pinterestIcon).toBeInTheDocument();
  });

  it('test if social media icons get to the correct link', () => {
    const { getByAltText } = render(<App />);

    const facebookIcon = getByAltText('Facebook icon');
    const twitterIcon = getByAltText('Twitter icon');
    const googleIcon = getByAltText('Google icon');
    const pinterestIcon = getByAltText('Pinterest icon');

    expect(facebookIcon.closest('a')).toHaveAttribute('href', 'http://www.facebook.com/');
    expect(twitterIcon.closest('a')).toHaveAttribute('href', 'https://twitter.com/');
    expect(googleIcon.closest('a')).toHaveAttribute('href', 'https://www.google.com/');
    expect(pinterestIcon.closest('a')).toHaveAttribute('href', 'https://br.pinterest.com/');
  })
});

describe('4 - testing Support component footer section', () => {
  it('test if address is correct', () => {
    const { getByText } = render(<App />);

    const companyName = getByText('HALOVIETNAM LTD');
    const addressName = getByText('66, Dang Van ngu, Dong Da Hanoi, Vietnam');

    expect(companyName).toBeInTheDocument();
    expect(addressName).toBeInTheDocument();
  });

  it('test if email contact is correct', () => {
    const { getByText } = render(<App />);

    const emailContact = getByText('contact@halovietnam.com');

    expect(emailContact).toBeInTheDocument();
  });

  it('test if email contact has the correct link', () => {
    const { getByText } = render(<App />);

    const emailContact = getByText('contact@halovietnam.com');

    expect(emailContact).toHaveAttribute('href', 'mailto:contact@halovietnam.com');
  })

  it('test if phone number for contact is correct', () => {
    const { getByText } = render(<App />);

    const phoneNumber = getByText('+844 35149182');

    expect(phoneNumber).toBeInTheDocument();
  });

  it('test if phone number for contact has the correct link', () => {
    const { getByText } = render(<App />);

    const phoneNumber = getByText('+844 35149182');

    expect(phoneNumber).toHaveAttribute('href', 'tel:+844 35149182');
  })

  it('test if footer aditional links are correct', () => {
    const { getByTestId } = render(<App />);

    const examplesLink = getByTestId('examples-link');
    const shopLink = getByTestId('shop-link');
    const licenseLink = getByTestId('license-link');
    const contactLink = getByTestId('contact-link');
    const aboutLink = getByTestId('about-link');
    const privacyLink = getByTestId('privacy-link');
    const termsLink = getByTestId('terms-link');
    const downloadLink = getByTestId('download-link');
    const supportLink = getByTestId('support-link');
    const documentsLink = getByTestId('documents-link');
    const mediaLink = getByTestId('media-link');
    const blogLink = getByTestId('blog-link');
    const forumsLink = getByTestId('forums-link');

    expect(examplesLink).toHaveAttribute('href', '#header');
    expect(shopLink).toHaveAttribute('href', '#header');
    expect(licenseLink).toHaveAttribute('href', '#header');
    expect(contactLink).toHaveAttribute('href', '#header');
    expect(aboutLink).toHaveAttribute('href', '#header');
    expect(privacyLink).toHaveAttribute('href', '#header');
    expect(termsLink).toHaveAttribute('href', '#header');
    expect(downloadLink).toHaveAttribute('href', '#header');
    expect(supportLink).toHaveAttribute('href', '#header');
    expect(documentsLink).toHaveAttribute('href', '#header');
    expect(mediaLink).toHaveAttribute('href', '#header');
    expect(blogLink).toHaveAttribute('href', '#header');
    expect(forumsLink).toHaveAttribute('href', '#header');
  });
});