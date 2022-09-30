function append(x)
{
    display.value = display.value + x;
}

function calculate()
{
    var result = eval(display.value);
    display.value = result;            
}

function clr()
{
    display.value = "";
}

function back_space()
{
    display.value = display.value.slice(0,display.value.length-1)
}