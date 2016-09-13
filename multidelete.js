


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
            if( selected.length > 0){
                this.$http.post(url, selected ).then(function(request){
                    console.log(request);
                    toastr['success'](request.data.message, "Success");
                    window.location.reload();
                }, function(error){
                    toastr['error'](error.data[0], "Error");
                });
            }
            else{

                    toastr['error']("Select At Least One Recoard ", "Error");
                }
            }

    }

});
