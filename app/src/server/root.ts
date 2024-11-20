import { createTRPCRouter, publicProcedure } from "@/server/trpc";

const appRouter = createTRPCRouter({
  example: publicProcedure.query(() => {
    return { message: "Hello World" };
  }),
});

export { appRouter };
