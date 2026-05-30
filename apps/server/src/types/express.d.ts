declare global {
  namespace Express {
    interface User {
      id: number;
      onboarded: boolean;
    }
  }
}

export {};
