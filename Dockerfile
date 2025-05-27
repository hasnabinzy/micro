# Use node image
FROM node:18

# Create and set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the port and run the app
EXPOSE 1000
CMD ["node", "propay.js"]

