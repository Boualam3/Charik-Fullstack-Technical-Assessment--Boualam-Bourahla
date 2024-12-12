# The first stage
# Build React static files
# First stage: Build the frontend with Node.js
FROM node:20-alpine AS build

WORKDIR /app/frontend
COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm ci --silent
COPY ./frontend/ ./
RUN npm run build

# Second stage: Serve the built static files using Nginx
FROM nginx:stable-alpine

# Copy build  to Nginx web server dir
COPY --from=build /app/frontend/dist /usr/share/nginx/html

# Nginx command for run  server
CMD ["nginx", "-g", "daemon off;"]
