$("body").click(()=>{
    // alert("Clicked");
});

$(".largedisplay").html("0");
let op1, op2, operator, exp;

$(".operator").click(function (){
    op1 = $(".largedisplay").html();
    operator = $(this).html();
    exp = op1+operator;
    $(".minidisplay").html(exp);
    op2 = 0;
    console.log(exp);
});

$(".operand").click(function () {
    if(op1 == undefined){ op1 = 0; }
    if(operator == undefined){ operator = ""; }
    if(op2 == undefined){ op2 = 0; }
    op2 += $(this).html();
    exp = op1+operator+op2;
    $(".largedisplay").html(op2);
    console.log(exp);
});

$(".equal").click(function() {
    console.log(exp);
    $(".minidisplay").html(exp+"=");
    let result;
    switch (operator) {
        case "+":
            result = parseFloat(op1) + parseFloat(op2);
            break;
        case "-":
            result = parseFloat(op1) - parseFloat(op2);
            break;
        case "*":
            result = parseFloat(op1) * parseFloat(op2);
            break;
        case "/":
            result = parseFloat(op1) / parseFloat(op2);
            break;
    }
    exp = result.toString();
    $(".largedisplay").html(exp);
    op2 = 0;
});

$(".clear").click(function (){
    op1 = 0, op2 = 0, exp = 0;
    operator = undefined;
    $(".minidisplay").html("");
    $(".largedisplay").html("0");
});

$(".inversion").click(function (){
    let sth = $(".largedisplay").html();
    if(sth > 0){
        $(".largedisplay").html("-"+sth);
    }else{
        sth = sth.substring(1);
        $(".largedisplay").html(sth);   
    }
});

$(".opening-bracket").click(function (){
    let sth = $(".largedisplay").html();
    $(".largedisplay").html(sth+"(");
});

$(".closing-bracket").click(function (){
    let sth = $(".largedisplay").html();
    $(".largedisplay").html(sth+")");
});

$(".point").click(function (){
    let sth = $(".largedisplay").html();
    if (sth == op1){
        op1 += ".";
        $(".largedisplay").html(op1);
    }
    else{
        op2 += ".";
        $(".largedisplay").html(op2);
    }
});