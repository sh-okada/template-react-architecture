import { initTRPC } from '@trpc/server';
import { cache } from 'react';

const createTRPCContext = cache(async () => {
  /**
   * @see: https://trpc.io/docs/server/context
   */
  return { userId: 'user_123' };
});


const t = initTRPC.create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  // transformer: superjson,
});

// Base router and procedure helpers
const createTRPCRouter = t.router;
const createCallerFactory = t.createCallerFactory;
const baseProcedure = t.procedure;

export {
    createTRPCContext,
    createTRPCRouter,
    createCallerFactory,
    baseProcedure
}
