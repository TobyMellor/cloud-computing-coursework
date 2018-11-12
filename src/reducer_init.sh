# !/bin/sh

# Extract the package
tar -xzf package.tar.gz

# Execute the reducer with the included node binary
./usr/local/nvm/versions/node/v8.9.4/bin/node dist/reducer.js