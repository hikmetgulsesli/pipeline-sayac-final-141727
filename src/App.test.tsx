import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App counter', () => {
  it('renders initial empty state', () => {
    render(<App />);
    expect(screen.getByText('Sayaç sıfır.')).toBeInTheDocument();
    expect(screen.getByText('Boş Durum')).toBeInTheDocument();
  });

  it('increments counter when Artır clicked', () => {
    render(<App />);
    const incrementBtn = screen.getAllByLabelText('Artır')[0];
    fireEvent.click(incrementBtn);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decrements counter when Azalt clicked', () => {
    render(<App />);
    const incrementBtn = screen.getAllByLabelText('Artır')[0];
    const decrementBtn = screen.getAllByLabelText('Azalt')[0];
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(decrementBtn);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('resets counter when Sıfırla clicked', () => {
    render(<App />);
    const incrementBtn = screen.getAllByLabelText('Artır')[0];
    const resetBtn = screen.getAllByLabelText('Sıfırla')[0];
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(resetBtn);
    expect(screen.getByText('Sayaç sıfır.')).toBeInTheDocument();
  });

  it('shows max warning when reaching max', () => {
    render(<App />);
    const incrementBtn = screen.getAllByLabelText('Artır')[0];
    for (let i = 0; i < 10; i++) {
      fireEvent.click(incrementBtn);
    }
    expect(screen.getByText(/Maksimum sayaç değeri/)).toBeInTheDocument();
  });

  it('disables increment button at max', () => {
    render(<App />);
    const incrementBtn = screen.getAllByLabelText('Artır')[0];
    for (let i = 0; i < 10; i++) {
      fireEvent.click(incrementBtn);
    }
    expect(incrementBtn).toBeDisabled();
  });

  it('disables decrement button at min', () => {
    render(<App />);
    const decrementBtn = screen.getAllByLabelText('Azalt')[0];
    expect(decrementBtn).toBeDisabled();
  });

  it('renders ZenCounter header', () => {
    render(<App />);
    expect(screen.getByText('ZenCounter')).toBeInTheDocument();
  });
});
