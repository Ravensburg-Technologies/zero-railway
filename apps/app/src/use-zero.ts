import type { Schema } from "@repo/zero";
import { useZero as useZeroBase } from "@rocicorp/zero/react";

export function useZero() {
	return useZeroBase<Schema>();
}
