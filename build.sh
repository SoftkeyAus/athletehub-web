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

# Step 3: Install the 'serve' npm package globally (if not already installed)
if ! command -v serve &> /dev/null; then
    echo "'serve' package not found. Installing..."
    sudo npm install -g serve
fi

# Step 4: Install PM2 globally if not already installed
if ! command -v pm2 &> /dev/null; then
    echo "'pm2' package not found. Installing..."
    sudo npm install -g pm2
fi

# Step 5: Use PM2 to run the server continuously on port 3000
echo "Starting the athletehub-web-app with PM2 on port 3000..."
pm2 start serve-wrapper.js --name "react-app" --interpreter node

# Display the status of PM2 processes
pm2 status
