#!/bin/bash

# Set the maximum file size in bytes (1 MB = 1000000 bytes)
MAX_SIZE=1000000

# Loop through all PNG files in the current directory and compress them
for file in *.png; do
  # Get the current file size
  size=$(wc -c < "$file")

  # Check if the file size is greater than the maximum size
  if [ "$size" -gt "$MAX_SIZE" ]; then
    # Compress the file using ImageMagick
    convert "$file" -quality 70% "${file%.png}-compressed.png"

    # Replace the original file with the compressed version
    mv "${file%.png}-compressed.png" "$file"

    # Print a message to indicate the file has been compressed
    echo "Compressed $file"
  else
    # Print a message to indicate the file is already small enough
    echo "$file is already small enough"
  fi
done
