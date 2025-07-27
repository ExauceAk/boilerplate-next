export async function GET() {
  return Response.json({ socketUrl: process.env.API_SOCKET_IO_URL });
}
