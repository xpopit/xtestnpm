#!/bin/bash
echo "run"
read -p "Enter : " enter
git add . && git commit -am "${enter}"
npm version patch 
npm publish --registry http://localhost:4873/