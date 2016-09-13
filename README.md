# vuejs-multiselect-script
Use this script to select multiple objects from the page and send it to the back end via ajax post request

## Can be used For
"You Can use this for the operation where you have to select multiple elements from the list of elements and have send them to the
backend or some url for the processing vie ajax post , you can use this script"

for exampel,

- selective multiple deletetion
- selective multiple updatation
- or simpley passing the multiple selecteive elements { data objects }

## Configuring

- First on the page where you want to select the multiple objects , ''' add v-model="indexes" ''' on each object that can be selected
- In the script file change the url where you want to send the array of data
- Define multiple function like deleteSelect { givenasExample }, updateSelect, renameSelect as your need
- You done

## Currently Included Checks

- It checks for the selected elements , if no element is selected than it will throw an alert
