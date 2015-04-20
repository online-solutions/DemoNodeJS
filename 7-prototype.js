/**
 * Created by SUCCESS\phungdinh on 4/20/15.
 */

function User(){
    this.name = "";
    this.life = 100;
    this.giveLife = function (targetPlayer) {
        targetPlayer.life ++;
        this.life --;
        console.log(this.name + " give 1 life to " + targetPlayer.name);
    }
}

var Lite = new User();
var Sally = new User();
Lite.name = "Lite";
Sally.name = "Sally";

Lite.giveLife(Sally);
console.log(Lite.name + " has " + Lite.life + " life");
console.log(Sally.name + " has " + Sally.life + " life");

// Add more functions to objects
User.prototype.upperCut = function(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name + " upperCutted " + targetPlayer.name);
}

Sally.upperCut(Lite);
console.log(Lite.name + " has " + Lite.life + " life");
console.log(Sally.name + " has " + Sally.life + " life");

// Before add 'magic' properties
console.log(Lite.name + " has " + Lite.magic + " magic");
console.log(Sally.name + " has " + Sally.magic + " magic");

// Add more properties to objects
User.prototype.magic = 60;
console.log(Lite.name + " has " + Lite.magic + " magic");
console.log(Sally.name + " has " + Sally.magic + " magic");