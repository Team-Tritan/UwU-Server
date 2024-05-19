import { Hono } from "hono";
import { uwuify } from "./uwu";
import { serve } from "bun";

const app = new Hono();

app.get("/", (c) =>
  c.json({
    instructions:
      "Use /uwu endpoint with 'message' query parameter to UwUify your text.",
  })
);

app.get("/uwu", (c) => {
  const message = c.req.query("message") || "";
  return c.text(uwuify(message));
});

serve({
  fetch: app.fetch,
  port: 3001,
});
