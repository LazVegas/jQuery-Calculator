$(document).ready(function() {
    var num1 = ""
    var oper = ""
    var num2 = ""

    $("#calc").on("click", "button", function(e) {
        var val = $(this).html()

        if (val === "=") {
            if (oper === "+") {
                $("#result").html(Number(num1) + Number(num2))
            } else if (oper === "-") {
                $("#result").html(Number(num1) - Number(num2))
            }
            else if (oper === "X") {
                $("#result").html(Number(num1) * Number(num2))
            }
            else if (oper === "/") {
                $("#result").html(Number(num1) / Number(num2))
            }
        } else if (val === "X" || val === "/" || val === "+" || val === "-") {
            oper = val
        } else if (val === "C") {
            num1 = ""
            num2 = ""
            oper = ""
            $("#result").html("")
        } else {
            if (oper === "") {
                num1 += val
                $("#result").html(val)
            } else {
                num2 += val
                $("#result").html(val)
            }
        }
    })
})


/*
$(document).ready(function() {
    var str = ""
    $("#calc").on("click", "button", function(e) {
        var val = $(this).html()
        if (val !== "=") {
            str += val
            console.log(str)
        } else {
            $("#result").html(eval(str))
        }
    })
})
*/

/* Ryan's version --------------------------------- 

$(document).ready(function() {

    var num1 = "";
    var oper = "";
    var num2 = "";
    $("#calc").on("click", "button", function(e) {
        var val = $(this).html()
        if (val === "X" || val === "/" || val === "+" || val === "-") {
            oper = val}
    console.log(val)
        console.log(oper)
    if (val === "=" && oper === '+')  {
            $("#result").html(Number(num1) + Number(num2))
        } else if (oper === "-") {
            $("#result").html(Number(num1) - Number(num2))
        }
        else if (val === "c") {
            num1 = ""
            num2 = ""
            oper = ""
        } else {
            if (oper === "") {
                num1 += val
            } else {
                num2 += val
            }
        }

    })
});
*/