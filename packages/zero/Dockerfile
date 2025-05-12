
FROM oven/bun:1 AS buninstall
COPY litestream.yml /etc/litestream.yml
COPY . .
RUN curl -fsSL https://bun.sh/install | bash
RUN bun install
RUN ls -al
FROM rocicorp/zero:0.19.2025050203
COPY --from=buninstall /app/node_modules /app/node_modules
COPY --from=buninstall /app/bun.lock /app/bun.lock
COPY --from=buninstall /app/package.json /app/package.json
COPY --from=buninstall /app/src /app/src
COPY --from=buninstall /app/tsconfig.json /app/tsconfig.json
COPY --from=buninstall /app/litestream.yml /app/litestream.yml
