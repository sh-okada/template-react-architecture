import { baseProcedure, createTRPCRouter } from '@/server/trpc/init';
import { z } from 'zod';

const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});

type AppRouter = typeof appRouter;

export {appRouter, type AppRouter}
