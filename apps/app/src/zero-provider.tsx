import { schema } from "@repo/zero";
import { Zero } from "@rocicorp/zero";
import { ZeroProvider as ZeroProviderBase } from "@rocicorp/zero/react";

const zero = new Zero({
	userID: "anon",
	kvStore: "idb",
	schema,
	server: import.meta.env.VITE_ZERO_URL,
});

export function ZeroProvider({ children }: { children: React.ReactNode }) {
	return <ZeroProviderBase zero={zero}>{children}</ZeroProviderBase>;
}
