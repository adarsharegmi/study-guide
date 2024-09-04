import { t } from "../core/trpc";
import { workspace } from "./workspace";

/**
 * The root tRPC router.
 * @see https://trpc.io/docs/quickstart
 */
export const router = t.router({
  workspace,
});

export type AppRouter = typeof router;
