function sort_mas(mas){
    var a = mas[0];
    var b = mas[1];
    for (var i = 0; i < b.length-1; i++) {
        var min = i;
        for (var j = i+1; j < b.length; j++) {
            if (b[j] > b[min])
                min = j;
        }
        var tempB = b[min];
        var tempA = a[min];
        b[min] = b[i];
        a[min] = a[i];
        a[i] = tempA;
        b[i] = tempB;
    }
    return mas;
};
var sortedMassiv = (function(text){
    var a = [], b = [], temp, j;
    text = text.toLowerCase();
    var mass = text.replace(/[/.,!?;:-]*/g, '').split(" ");
    mass.sort();
    for (var i = mass.length; i >= 0; i--) {
        if (!mass[i]) mass.splice(i, 1);
    }
    for ( var i = 0; i < mass.length; i++ ) {
        if ( mass[i] !== temp ) {
            a.push(mass[i]);
            b.push(1);
        } else {
            j = a.indexOf(mass[i]);
            b[j]+=1;
        }
        temp = mass[i];
    }
    return sort_mas([a, b]);
});
$(document).ready(function() {
    $("#sort-form").submit(function(event) {
        var text = $('.form-control').val();
        if(text == null || text.length < 1){
            alert("Введите текст!");

        }else {
            var result = sortedMassiv(text);
            for (var i = 0; i < result[0].length; i++) {
                var element_to_append = "<p>" + result[0][i] + "</p>";
                $('#quote-1').append(element_to_append);
            }
            for (var j = 0; j < result[1].length; j++) {
                var element_to_append = "<p>" + result[1][j] + "</p>";
                $('#quote-2').append(element_to_append);
            }

            $("#btn-click").hide();
            $('#btn-again').show();
        }
        $("#btn-again").click(function (event) {
            location.reload();
        });
            event.preventDefault();
        });
    });



