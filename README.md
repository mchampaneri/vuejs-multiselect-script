# vuejs-multiselect-script
Use this script to select multiple objects from the page and send it to the back end via ajax post request

## Change / Update Log



## Can be used For
"You Can use this for the operation where you have to select multiple elements from the list of elements and have send them to the
backend or some url for the processing vie ajax post , you can use this script"

for exampel,

- selective multiple deletetion
- selective multiple updatation
- or simpley passing the multiple selecteive elements { data objects }


## Configuring

- First on the page where you want to select the multiple objects , ''' add v-model="indexes" ''' on each object that can be selected
- I suggest to use the checkboxes for the element selector with the id of element to be selected
  for example ,

          <input name="id[]" type="checkbox" class="checkboxes" v-model="indexes" value="{{$element->id}}">


- If you want to add a bulk select check box than you can use this script

  ```
  var t=1;

    $(document).ready(function() {

        $('#mselect').click(function() {

            switch (t){
                case 0:
                    $('.checkboxes').prop('checked', true);
                    $('.checkboxes').click();
                    t=1;
                    console.log("check fire");
                    break;

                case 1:
                    $('.checkboxes').prop('checked', false);
                    $('.checkboxes').click();
                    console.log("Uncheck fire");
                    t=0;
                    break;

            }
        });
    });

  ```

- In the script file change the url where you want to send the array of data
- Define multiple function like deleteSelect { givenasExample }, updateSelect, renameSelect as your need
- You done

## Currently Included Checks

- It checks for the selected elements , if no element is selected than it will throw an alert
