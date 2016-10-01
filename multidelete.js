
//////////////////////// I Suggest you to use the checkbox as selector //////////////////////////////////

var Vue = require('vue');
var VueResource = require('vue-resource');

Vue.use(VueResource);

// Make The Line Below Uncomment If You are Using The Laravel
// Vue.http.headers.common['X-CSRF-TOKEN'] = $("input[name=_token]").attr("value");


new Vue({

    el:'#list', // Element Name Of Parent

    data:{
        indexes : []
    },

    methods:{
        deleteSelect: function()
        {
            console.log('Delete Activeted');
            var url = // Backend Url That is Process The Indexes ;
            var selected = {indexes :this.indexes};
            if( selected.indexes.length.length > 0){

              /////////////////////////////////////////////////////////////////////////////////////////////////////
              // Put the confirma action block code inside the ok button function incase you are using
              // any confirmation plugin like :
              // alertify
              // bootstrap confirmtaion
              // etc..
              // If you are not using any confirmation plugin than simply remove this block of comment
              /////////////////////////////////////////////////////////////////////////////////////////////////////

                //////////////////////// Confrim action block start ///////////////////////////
                this.$http.post(url, selected ).then(function(request){
                    console.log(request);
                    toastr['success'](request.data.message, "Success");
                    window.location.reload();
                }, function(error){
                    toastr['error'](error.data[0], "Error");
                //////////////////////// Confirm action block  finsish //////////////////////

                });
            }
            ////////////////////  If no Element is selected /////////////////////////////////
            else{

                    alert(" No Element is Selected");
                }
            }

    }

});
