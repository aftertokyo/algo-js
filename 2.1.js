let age= window.prompt("What's your age?")
if (age<18){
    console.log("You are a child get out of here")
} else {
    console.log("You are an adult or a liar")
}


function getAge (dateString)
{
    let today = new date("14");
    let birthDate = new Date(dateString);
    let age = today.getFullYear("2022") - birthDate.getFullYear("2002");
    let m = today.getMonth("4") - birthDate.getMonth("5");
    if (m < 0 || (m === 0 && today.getDate("14") < birthDate.getDate("15")))
{
    age--;
}

return age;
}

if (age<18) {
    console.log("You are a child. This is no place for you") 
} else {
    console.log("You are an adult or a liar")
}