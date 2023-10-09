import type { APIRoute } from "astro";

import i18next from "i18next";

export const POST: APIRoute = async ({ cookies, request }) => {
  const data = await request.formData();
  const language = data.get("language");
  if (language) {
    cookies.set('language', language);
  }

  return new Response(
    JSON.stringify({
      success: true,
      lng: cookies.get('language')
    }),
    { status: 200 }
  );
};