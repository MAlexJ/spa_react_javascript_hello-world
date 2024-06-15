# Specify the base image
FROM node:alpine
# Set the working directory
WORKDIR /app
# Copy the package.json and package-lock.json files
COPY package*.json ./
# Install the dependencies
RUN npm install
# Copy the app files
COPY . .
# Build the app
RUN npm run build
# Expose the port
EXPOSE 4040
# Run the app
CMD ["cross-env", "PORT=4040", "react-scripts", "start"]