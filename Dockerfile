# Multi-stage Dockerfile for building and serving the frontend Vite app

# Build stage
FROM node:18-bullseye-slim AS build
WORKDIR /app

# Copy package files from the frontend folder to leverage Docker layer cache
COPY frontend/package*.json ./
RUN npm install --silent

# Copy frontend source and build (Vite outputs to /dist)
COPY frontend/ ./
RUN npm run build

# Production stage
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
