# Use latest Node runtime
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY todo-app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY todo-app/ .

# Build for production
RUN npm run build

# Serve the code using Vite
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose the port the app runs on
EXPOSE 3000