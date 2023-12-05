rm -rf html
cp -r md html 
cd html
find . -type f -name "*.md" | sed "s/\(\.\/\)\(.*\)\(.sy.md\)/\2/g" | xargs mkdir
find . -type f -name "*.md" | sed "s/\(\.\/\)\(.*\)\(.sy.md\)/mv \1\2\3 \2/g" > go.sh
chmod u+x go.sh
