import { Hono } from "hono";
import { uwuify } from "./uwu";
import { serve } from "bun";

const app = new Hono();

app.get("/:text", (c) => c.text(uwuify(c.req.param("text") || "")));

serve({
  fetch: app.fetch,
  port: 3001,
});
