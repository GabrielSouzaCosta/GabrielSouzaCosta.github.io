import type { APIRoute } from "astro";
import i18next from "i18next";

export const prerender = false

export const POST: APIRoute = async ({ cookies, request, redirect }) => {
  const data = await request.formData();
  const language = data.get("language");
  if (language) {
    i18next.changeLanguage(language as string);
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