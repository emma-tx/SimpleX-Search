$(document).ready(function(){
    $(".search-button").click(function(){

        $('.search-results').html("");

        $.getJSON( "groups.json", function(data) {
            var queryString = $('#search-query').val();
            var regex = new RegExp(queryString,'i');

            $.each(data, function (index, value) {
                if((value.Name.toString().search(regex) != -1)  || (value.Description.toString().search(regex) != -1)){

                    $('.search-results').append(  
                        "<b>Group: " + this.Name + "</b></br>"
                        + "<b>Description:</b> " + this.Description + "</br>"
                        + "<b>Link:</b> " + this.Link + "</br>" + "<hr>"
                    );
                }
            });
        });
    });
});