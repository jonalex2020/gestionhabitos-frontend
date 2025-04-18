import './globals.css';
import StoreProvider from './StoreProvider';

export const metadata = {
  title: 'Gestión de Hábitos',
  description: 'App con Redux y Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
