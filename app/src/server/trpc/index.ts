import { auth } from "@/lib/auth";
import { initTRPC, TRPCError } from "@trpc/server";
import { experimental_nextAppDirCaller } from "@trpc/server/adapters/next-app-dir";

interface Meta {
  span: string;
}

const t = initTRPC.meta<Meta>().create();

const serverActionProcedure = t.procedure
  .experimental_caller(
    experimental_nextAppDirCaller({
      pathExtractor: ({ meta }) => (meta as Meta).span,
    })
  )
  .use(async (opts) => {
    const session = await auth();

    return opts.next({ ctx: { user: session?.user } });
  });

const protectedAction = serverActionProcedure.use((opts) => {
  if (!opts.ctx.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }

  return opts.next({
    ctx: {
      ...opts.ctx,
      user: opts.ctx.user,
    },
  });
});
