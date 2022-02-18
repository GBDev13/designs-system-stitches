import { globalStyles } from '@/styles/global';
import { AppProps } from 'next/app';

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
