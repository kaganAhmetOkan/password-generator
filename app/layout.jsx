import './globals.css';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: 'Random Password Generator',
  description: 'Generate a random password with the parameters you provide.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
};