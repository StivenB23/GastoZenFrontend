import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';
import { AuthContext } from '../../context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { describe, it, expect } from 'vitest';

// Mock de useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Login Component', () => {
  const setup = (loginMock) => {
    render(
      <AuthContext.Provider value={{ login: loginMock }}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthContext.Provider>
    );
  };

  it('muestra mensajes de error si los campos están vacíos', async () => {
    setup(vi.fn());

    fireEvent.click(screen.getByRole('button', { name: /ingresar/i }));

    await waitFor(() => {
      expect(screen.getByText('El correo no puede estar vacío')).toBeInTheDocument();
      expect(screen.getByText('La contraseña no puede estar vacía')).toBeInTheDocument();
    });
  });

  it('muestra error si las credenciales son inválidas', async () => {
    const loginMock = vi.fn().mockResolvedValue({ error: true });
    setup(loginMock);

    fireEvent.change(screen.getByLabelText(/correo/i), {
      target: { value: 'wrong@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/contraseña/i), {
      target: { value: 'wrongpass' },
    });
    fireEvent.click(screen.getByRole('button', { name: /ingresar/i }));

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalledWith({
        email: 'wrong@example.com',
        password: 'wrongpass',
      });
      expect(screen.getByText('Las credenciales no son correctas')).toBeInTheDocument();
    });
  });

  it('navega al dashboard si el login es exitoso', async () => {
    const loginMock = vi.fn().mockResolvedValue({ error: false });
    setup(loginMock);

    fireEvent.change(screen.getByLabelText(/correo/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/contraseña/i), {
      target: { value: 'correctpass' },
    });
    fireEvent.click(screen.getByRole('button', { name: /ingresar/i }));

    // Esperar la llamada de login y la navegación
    await waitFor(() => {
      expect(loginMock).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'correctpass',
      });
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard/me');
    });
  });
});
