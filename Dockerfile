# Use Node.js base image
FROM node:20.17.0-alpine

# Set working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Use Nginx to serve the app
FROM nginx:1.23-alpine

# Copy the built app files to Nginx's HTML directory
COPY --from=0 /src/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
