declare global {
	namespace NodeJS {
		export interface ProcessEnv {
			NODE_ENV: string;
			DB_URI: string;
			PORT: number;
		}
	}
}

export { };