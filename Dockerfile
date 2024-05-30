# Use a specific Node.js version
FROM node:16.14.0

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on (optional, but good practice)
EXPOSE 3000

# Define the command to run the application
CMD ["node", "server.js"]
