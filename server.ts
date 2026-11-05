const port = Number(process.env.PORT ?? 3000);
const runtime = process.env.STDEPLOY_RUNTIME ?? "process";
Bun.serve({
  port,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/health") return new Response("ok");
    if (url.pathname === "/api/info") return Response.json({ runtime, port, pid: process.pid, at: new Date().toISOString() });
    return new Response(Bun.file("public/index.html"));
  },
});
console.log(`demo app listening on :${port} (${runtime})`);
