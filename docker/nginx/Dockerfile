# # The first stage
# # Build React static files
# FROM node:13.12.0-alpine as build

# WORKDIR /app/frontend
# COPY ./frontend/package.json ./
# COPY ./frontend/package-lock.json ./
# RUN npm ci --silent
# COPY ./frontend/ ./
# RUN npm run build

# # The second stage
# # Copy React static files and start nginx
# FROM nginx:stable-alpine
# COPY --from=build /app/frontend/build /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]

# The first stage
# Build React static files
# First stage: Build the frontend with Node.js
FROM node:20-alpine as build

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
