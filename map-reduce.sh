#!/bin/bash

if [[ $4 -eq 0 ]] ; then
    echo 'Incorrect usage. Please specify the cluster ID, cluster region, input and output.'
    echo 'Example: ./map-reduce.sh cluster-4751 global gs://coc105-coursework/10.txt gs://coc105-coursework-output/test-output'
    exit 1
fi

npm run build

base_script="#!/bin/sh

# Extract the package
tar -xzf package.tar.gz

# Execute script with the included node binary
./$(which node)"
mapper_script="$base_script dist/mapper.js"
reducer_script="$base_script dist/reducer.js"

echo "$mapper_script" > ./dist/mapper_init.sh
echo "$reducer_script" > ./dist/reducer_init.sh

tar -cvf package.tar.gz dist \"$(which node)\"

gcloud dataproc jobs submit hadoop \
  --cluster $1 \
  --region=$2 \
  --jar file:///usr/lib/hadoop-mapreduce/hadoop-streaming.jar \
  --files package.tar.gz,./dist/mapper_init.sh,./dist/reducer_init.sh \
  -- -mapper 'sh mapper_init.sh' \
     -reducer 'sh reducer_init.sh' \
     -input $3 \
     -output $4