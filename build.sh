#! /bin/bash

cd ui && ng build  --aot --no-sourcemap --env=prod --build-optimizer --target=production && cd ..
npm run prod_build