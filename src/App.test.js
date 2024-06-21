import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})


test('test initialize Times', () => {
  render(<BookingForm />);
  const bookingTimes=fetchAPI(date)
  const headingElement = screen.getByText("Book Now");

  expect(headingElement).toBeInTheDocument();
})

test('test update Times', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

test('test input form validation', () => {
  render(<BookingForm />);
  const bookingTimes=fetchAPI(date)
  const headingElement = screen.getByText("Book Now");

  expect(headingElement).toBeInTheDocument();
})

test('test form submission validation', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})