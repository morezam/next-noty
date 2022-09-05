import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/Base';
import { darkTheme, lightTheme } from '../components/Theme';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={lightTheme}>
			<Component {...pageProps} />
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default MyApp;
