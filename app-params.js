import { getAccessToken } from '@base44/sdk';

const isNode = typeof window === 'undefined';

const isClearAccessTokenRequested = () =>
	!isNode && new URLSearchParams(window.location.search).get("clear_access_token") === 'true';

const clearStoredAccessToken = () => {
	try {
		window.localStorage.removeItem('base44_access_token');
		window.localStorage.removeItem('token');
	} catch {
		// armazenamento indisponível neste contexto (iframe restrito, modo privado, cookies bloqueados)
	}
}

// O acesso ao localStorage pode ser negado pelo navegador (iframe em sandbox,
// modo privado, cookies de terceiros bloqueados). Nesses casos o app segue
// funcionando como visitante anônimo em vez de quebrar na inicialização.
const readAccessToken = () => {
	try {
		return getAccessToken();
	} catch {
		return null;
	}
}

const getAppParams = () => {
	if (isClearAccessTokenRequested()) {
		clearStoredAccessToken();
	}
	return {
		appId: import.meta.env.VITE_BASE44_APP_ID,
		token: readAccessToken(),
		functionsVersion: (!isNode && new URLSearchParams(window.location.search).get("functions_version")?.trim()) || import.meta.env.VITE_BASE44_FUNCTIONS_VERSION,
		appBaseUrl: import.meta.env.VITE_BASE44_APP_BASE_URL,
	}
}


export const appParams = {
	...getAppParams()
}
