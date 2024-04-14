#!/bin/bash
for file in $(find . -type d -depth 1);do
    unit=${file:2};
    echo $unit;
    rm -f ./$unit/$unit.html
    cat head.template ./$unit/$unit.md foot.template>./$unit/$unit.html;
done
