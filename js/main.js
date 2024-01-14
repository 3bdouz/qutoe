var qoute =[
    {
        'qoute': "Do not take life too seriously. You will not get out alive.",
        'Author': "--Elbert Hubbard"
    },
    {
        'qoute': "The best revange is massive success.",
        'Author': "--Frank Sinatra"
    },
    {
        'qoute': "You miss100% ofthe shots you don't take.",
        'Author': "--Wayne Gretzy"
    }
]

function getQoutes(){
var num = Math.floor(Math.random()*qoute.length)
console.log(num)

document.getElementById("quate").innerHTML = qoute[num].qoute;
document.getElementById('author').innerHTML = qoute[num].Author;

}
