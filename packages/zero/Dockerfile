FROM rocicorp/zero:0.19.2025050203

COPY litestream.yml /etc/litestream.yml

FROM oven/bun:1 AS buninstall
COPY . .
RUN curl -fsSL https://bun.sh/install | bash
RUN bun install
RUN ls -al