
# FROM oven/bun:1 AS buninstall
# WORKDIR /app
# COPY . .
# RUN bun pm trust --all || true
# RUN bun install
# RUN bun pm trust --all || true
# RUN bun install
# RUN ls -al

FROM rocicorp/zero:0.19.2025050203
COPY litestream.yml /etc/litestream.yml
# COPY --from=buninstall /app .