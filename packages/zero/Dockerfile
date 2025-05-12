
FROM oven/bun:1 AS buninstall
WORKDIR /app
COPY litestream.yml /etc/litestream.yml
COPY . .
RUN curl -fsSL https://bun.sh/install | bash
RUN bun install
RUN ls -al
FROM rocicorp/zero:0.19.2025050203
COPY --from=buninstall /app/node_modules node_modules
COPY --from=buninstall /app/bun.lock bun.lock
COPY --from=buninstall /app/package.json package.json
COPY --from=buninstall /app/src src
COPY --from=buninstall /app/tsconfig.json tsconfig.json
COPY --from=buninstall /app/litestream.yml litestream.yml
