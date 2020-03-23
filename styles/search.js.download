function fill(Value) {
    //Assigning value to "search" div in "search.php" file.
    $('#searchterm').val(Value);
    //Hiding "display" div in "search.php" file.
    $('#searchbox').hide();
 }
 $(document).ready(function() {
    //On pressing a key on "Search box" in "search.php" file. This function will be called.
    $("#searchterm").keyup(function() {
        //Assigning search box value to javascript variable named as "name".
        var name = $('#searchterm').val();
        //Validating, if "name" is empty.
        if (name == "") {
            //Assigning empty value to "display" div in "search.php" file.
            $("#serchbox").html("");
        }
        //If name is not empty.
        else {
            //AJAX is called.
            $.ajax({
                //AJAX type is "Post".
                type: "POST",
                dataType: 'html',
                //Data will be sent to "ajax.php".
                url: "search-listings.php",
                //Data, that will be sent to "ajax.php".
                data: {
                    //Assigning value of "name" into "search" variable.
                    searchterm:'searchterm=' +name
                
                },
                //If result found, this funtion will be called.
                success: function(html) {
                   console.log(html);
                    //Assigning result to "display" div in "search.php" file.
                    $("#searchbox").html(html).show();
                }
            });
        }
    });
 });