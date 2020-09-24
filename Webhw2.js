let dingdong = process.argv.slice(2);
let output = "";
let outpit = 0;
let d;

dingdong[0] = parseInt(dingdong[0]);
dingdong[1] = parseInt(dingdong[1]);

if (dingdong[0] >= dingdong[1]) {
    console.log("Incorrect format");
}
else {
    for(let wtf = dingdong[0]; dingdong[1] >= wtf; wtf++) {
        d = parseFloat(wtf);
        output = output + d;
        if (dingdong[1] >= wtf + 1) {
            output = output + " + ";
        }
    }
    output = output + " = ";
    for(let wtf = dingdong[0]; dingdong[1] >= wtf; wtf++) {

        outpit = outpit + wtf;
    }
    console.log(output + outpit);
}