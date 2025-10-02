/**
 * Fetch service instance
 * @type {FetchService}
 */

import { authOptions } from "@/utils/auth-option";
import { getServerSession } from "next-auth";

export async function getToken() {
  const session = await getServerSession(authOptions);
  return session?.accessToken!;
}
