import { Resend } from 'resend';
import type { APIRoute } from "astro";

export const prerender = false


const resend = new Resend('re_EAkhogF8_HAKYNbNaJ8ohxc8jqZXFCpEV');

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
        success: false
      }),
      { status: 400 }
    );
  } else {
    resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: 'gscdevelop@outlook.com',
      subject: 'Website Contact',
      html: `Sender email: <a href="mailto:${email}">${email}</a>
        <div>
        ${message}
        </div>
      `
    });
    return new Response(
      JSON.stringify({
        message: "Success",
        success: true
      }),
      { status: 200 }
    );
  }

  return new Response(
    JSON.stringify({
      success: true
    }),
    { status: 200 }
  );
};