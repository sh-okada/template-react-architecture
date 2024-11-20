import { auth } from "@/lib/auth";
import { initTRPC, TRPCError } from "@trpc/server";

const createTRPCContext = async () => {
  const session = await auth();

  return { session };
};

const t = initTRPC.context<typeof createTRPCContext>().create();

const createTRPCRouter = t.router;

const publicProcedure = t.procedure;

const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({
    ctx: {
      session: { ...ctx.session.user },
    },
  });
});

export {
  createTRPCContext,
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
};
