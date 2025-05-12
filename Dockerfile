
FROM oven/bun:1 AS buninstall
WORKDIR /app
COPY . .
RUN curl -fsSL https://bun.sh/install | bash
RUN bun install
RUN ls -al
FROM rocicorp/zero:0.19.2025050203
COPY --from=buninstall /app .