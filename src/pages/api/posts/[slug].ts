import type { APIRoute } from "astro";
import { getEntry } from "astro:content";
export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;

  const posts = await getEntry("blog", slug);

  if (!posts) {
    return new Response(JSON.stringify({ msg: ` Post ${slug} not found` }), {
      status: 404,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  return new Response(JSON.stringify({ method: "POST", ...body }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};

export const PUT: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  return new Response(JSON.stringify({ method: "PUT", ...body }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};

export const PATCH: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  return new Response(JSON.stringify({ method: "PATCH", ...body }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};

export const DELETE: APIRoute = async ({ params, request }) => {
  const { slug } = params;
  return new Response(JSON.stringify({ method: "DELETE", slug: slug }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};
