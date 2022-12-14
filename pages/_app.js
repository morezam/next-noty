import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@lib/queryclient';
import GlobalStyle from '@components/Base';
import { lightTheme } from '@components/Theme';
import { AuthContextProvider } from '@context/authContext';
import '@components/editor/editor.styles.css';

function MyApp({ Component, pageProps }) {
	return (
		<AuthContextProvider>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={lightTheme}>
					<Component {...pageProps} />
					<GlobalStyle />
				</ThemeProvider>
			</QueryClientProvider>
		</AuthContextProvider>
	);
}

export default MyApp;
