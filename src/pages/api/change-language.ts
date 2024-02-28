import type { APIRoute } from "astro";
export const prerender = true;

export const POST: APIRoute = async ({ cookies, request, redirect }) => {
  const data = await request.formData();
  const language = data.get("language");
  if (language) {
    cookies.set('language', language, {
      path: '/',
    });
  }

  const response = new Response(
    JSON.stringify({
      path: new URL(request.url).pathname,
      success: true,
      lng: cookies.get('language')
    }),
    { status: 200 }
  );
  return response
};