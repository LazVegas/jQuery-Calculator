$(document).ready(function() {
    $("button").on("click", function(e) {
    var val = $(this).html()

    console.log(val)

    if (val === "+") {
    var result = Number($("#num1").val()) + Number($("#num2").val())
    }

    if (val === "-") {
    var result = Number($("#num1").val()) - Number($("#num2").val())
    }

    if (val === "*") {
    var result = Number($("#num1").val()) * Number($("#num2").val())
    }

    if (val === "/") {
    var result = Number($("#num1").val()) / Number($("#num2").val())
    }

    $("#result").val(result)

    })

})
