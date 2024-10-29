import type { APIRoute } from "astro";
export const prerender = false;
export const GET: APIRoute = async ({ params, request }) => {
  const person = {
    name: "Leonel AyoEl",
    age: 30,
  };
  return new Response(JSON.stringify(person), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};
