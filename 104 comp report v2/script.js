
//weapons
function items(Itemname,Itemimage,Itemcolor,Itemdamage){
    this.Itemname=Itemname
    this.Itemimage=Itemimage;
    this.Itemcolor=Itemcolor;
    this.Itemdamage=Itemdamage;
}

const tomato= new items('Tomato','red',30);
const potato= new items('Potato','yellow',40);
const duck= new items('Duck','yellow',50);

//characters
const colt ={
    image:'img/colt.gif',
    weight:60,
    speed:20,
    prize:'img/panda.gif',
    item:{
        weapon:'img/tomato.gif',
        damage:80
    },
    points:100,
    die:function(){
     return '<h4>Colt is down!</h4>';
    }
}

const sibi ={
    image:'img/sibi.gif',
    weight:10,
    speed:100,
    prize:'img/panda.gif',
    item:{
        weapon:'img/potato.gif',
        damage:40
    },
    points:100,
    die:function(){
       return '<h4>Sibi is down!</h4>';
    }
}

const rosie ={
    image:'img/rosie.gif',
    weight:20,
    speed:80,
    prize:'img/panda.gif',
    item:{
        weapon:'img/duck.gif',
        damage:60
    },
    points:100,
    die:function(){
        return '<h4>Rosie is down!</h4>';
    }
}

//fight

let coltAttackPoints = sibi.item.damage;
let coltAttackPoints1 = rosie.item.damage;

let sibiAttackPoints = colt.item.damage;
let sibiAttackPoints1 = rosie.item.damage;

let rosieAttackPoints = sibi.item.damage;
let rosieAttackPoints1 = colt.item.damage;


//colt
function coltAttack() {
    sibi.points = sibi.points-coltAttackPoints;
    console.log('Sibi is attacked with colts tomato... points: '+sibi.points);
    if(sibi.points<=0)
    {
        document.getElementById('message').innerHTML=`${sibi.die()} <img src="${colt.prize}" alt="YAY"><h4>Colt & his tomato wins!</h4>`
        console.log(sibi.die());
    }
}

function coltAttack1() {
    rosie.points = rosie.points-coltAttackPoints1;
    console.log('rosie is attacked with colts tomato ... points: '+rosie.points);
    if(rosie.points<=0)
    {
        document.getElementById('message').innerHTML=`${rosie.die()} <img src="${colt.prize}" alt="YAY"><h4>Colt & his tomato wins!</h4>`
        console.log(rosie.die());
    }
}

//sibi
function sibiAttack() {
    colt.points = colt.points-sibiAttackPoints;
    console.log('colt is attacked with sibis potato... points: '+colt.points);
    if(colt.points<=0)
    {
        document.getElementById('message1').innerHTML=`${colt.die()} <img src="${sibi.prize}" alt="YAY"><h4>Sibi & her potato wins!</h4>`
        console.log(colt.die());
    }
}

function sibiAttack1() {
    rosie.points = rosie.points-coltAttackPoints1;
    console.log('rosie is attacked with sibis potato ... points: '+rosie.points);
    if(rosie.points<=0)
    {
        document.getElementById('message1').innerHTML=`${rosie.die()} <img src="${sibi.prize}" alt="YAY"><h4>Sibi & her potato wins!</h4>`
        console.log(rosie.die());
    }
}

//rosie
function rosieAttack() {
    sibi.points = sibi.points-coltAttackPoints;
    console.log('sibi is attacked with rosies duck... points: '+sibi.points);
    if(sibi.points<=0)
    {
        document.getElementById('message2').innerHTML=`${sibi.die()} <img src="${rosie.prize}" alt="YAY"><h4>Rosie & her duck wins!</h4>`
        console.log(sibi.die());
    }
}

function rosieAttack1() {
    colt.points = colt.points-sibiAttackPoints;
    console.log('colt is attacked with rosies duck ... points: '+colt.points);
    if(colt.points<=0)
    {
        document.getElementById('message2').innerHTML=`${colt.die()} <img src="${rosie.prize}" alt="YAY"><h4>Rosie & her duck wins!</h4>`
        console.log(colt.die());
    }
}



