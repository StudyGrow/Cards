# Specify the base image
FROM node:16-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --quiet

# Copy the rest of the application
COPY . .

# Build the app
RUN npm run build --prod

# Start from a new image
FROM nginx:1.21.3-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=builder /app/dist/ /usr/share/nginx/html

# Copy the custom nginx.conf file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
