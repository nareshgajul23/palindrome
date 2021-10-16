
// const s1 = s.split("");
// //console.log(s1);
// const rev = s1.reverse();
// //console.log(rev);
// const palindrom = rev.join("");
// console.log(palindrom);
let s = "radar";
function isPalindrom(s){
    const s1 = s.split("");
    const rev = s1.reverse();
    const palindrom = rev.join("");
    if(s===palindrom){
        return "Yes it is Palindrom";
    }
    else{
        return "Not Palindrom";
    }
}

console.log(isPalindrom(s));