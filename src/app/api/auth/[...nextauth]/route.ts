import NextAuth from 'next-auth/next';
import { authConfig } from '../auth.config';

// @ts-expect-error - Type issues with next-auth
const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
