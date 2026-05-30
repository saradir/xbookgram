declare global {
  namespace Express {
    interface User {
      id: number;
      isOnboarded: boolean;
    }
  }
}

export {};
