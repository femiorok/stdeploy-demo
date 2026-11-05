FROM oven/bun:1-alpine
WORKDIR /app
COPY . .
ENV PORT=3000 STDEPLOY_RUNTIME=docker
EXPOSE 3000
CMD ["bun", "run", "server.ts"]
