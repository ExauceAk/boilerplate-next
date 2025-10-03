import "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    data: {
      userInfo: {
        role: {
          name: string;
        };
      };
      token: string;
    };
  }
}
declare module "next-auth" {
  interface Session {
    accessToken: string;
    role: string;
  }
}
