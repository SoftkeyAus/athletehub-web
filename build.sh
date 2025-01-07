#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Step 1: Build the React app
echo "Building the React app..."
npm run build

# Check if the build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
else
    echo "Build failed! Exiting..."
    exit 1
fi

# Step 2: Navigate to the build directory
echo "Navigating to the build folder..."
cd dist || { echo "Build folder not found! Exiting..."; exit 1; }

# Step 3: Install the 'serve' npm package globally (if not already installed)
if ! command -v serve &> /dev/null; then
    echo "'serve' package not found. Installing..."
    npm install -g serve
fi

# Step 4: Use PM2 to run the server continuously
echo "Starting the React app with PM2..."
pm2 start "$(which serve)" --name "athletehub-web-app" -- -s .

# Display the status of PM2 processes
pm2 status
