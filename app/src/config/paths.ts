export const paths = {
  home: {
    path: "/",
    getHref: () => "/",
  },
  questions: {
    path: "/questions",
    getHref: () => "/questions",
  },
  question: {
    path: "/questions/:questionId",
    getHref: (questionId: string) => `/questions/${questionId}`,
  },
} as const;
