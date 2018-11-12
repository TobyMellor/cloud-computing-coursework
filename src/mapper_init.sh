# !/bin/sh

# Extract the package
tar -xzf package.tar.gz

# Execute the mapper with the included node binary
./usr/local/nvm/versions/node/v8.9.4/bin/node dist/mapper.js