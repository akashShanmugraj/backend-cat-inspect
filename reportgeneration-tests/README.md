This folder contains one way to generate a report.

Steps
1. Get data from all collections
2. create an object
3. parse the object to convert it into markdown file
4. use markdown to pdf converter to convert the markdown file to pdf

check `output.md` and `output.pdf` for the output

in the real flow, intermediate files wont be created, maybe only the output.pdf (name changed) will be put in google cloud storage and a link will be shared with the user
