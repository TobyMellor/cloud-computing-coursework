#!/bin/bash

# Exit if there isn't the correct number of arguments
if [[ $4 -eq 0 ]] ; then
    echo "Incorrect usage. Please specify the cluster ID, cluster region, input and output."
    echo "Example: ./map-reduce.sh cluster-4751 global gs://coc105-coursework/10.txt gs://coc105-coursework-output/test-output"
    exit 1
fi

# Exit script if any error occurs (e.g. user pressing Ctrl + C)
set -e

# Compile typescript, move to /dist
npm run build

# Create two scripts for the mapper and the reducer
base_script="#!/bin/sh

# Extract the package
tar -xzf package.tar.gz

# Execute script with the included node binary
sh $(which node)"
mapper_script="$base_script dist/mapper.js"
reducer_script="$base_script dist/reducer.js"

touch ./dist/mapper_init.sh
touch ./dist/reducer_init.sh
echo "$mapper_script" > ./dist/mapper_init.sh
echo "$reducer_script" > ./dist/reducer_init.sh

# Zip the dist and node binary together and we'll include them in --files
# Suppress any errors we don't care about
{ tar -cvf package.tar.gz dist \"$(which node)\" ;} 2>/dev/null

# Run the google commands, with the arguments specified
gcloud dataproc jobs submit hadoop \
  --cluster $1 \
  --region=$2 \
  --jar file:///usr/lib/hadoop-mapreduce/hadoop-streaming.jar \
  --files package.tar.gz,./dist/mapper_init.sh,./dist/reducer_init.sh \
  -- -mapper 'sh mapper_init.sh' \
     -reducer 'sh reducer_init.sh' \
     -input $3 \
     -output $4