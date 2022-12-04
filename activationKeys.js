function activationKeys (input){
    let rawActivationKey = input.shift();
    let index = 0;
    let command = input[index]
    while (command !== "Generate") {
        let actionLine = command.split(">>>")
        switch (actionLine[0]) {
            case "Contains":
                if(rawActivationKey.includes(actionLine[1])){
                    console.log(`${rawActivationKey} contains ${actionLine[1]}`);
                }else {
                    console.log("Substring not found!");
                }
                break;
            case "Flip":
                let subStrStart = Number(actionLine[2]);
                let subStrEnd = Number(actionLine[3]);
                let subStr = rawActivationKey.substring(subStrStart, subStrEnd);
                if(actionLine[1]==="Upper"){
                    let upperSubStr = subStr.toUpperCase();
                    rawActivationKey = rawActivationKey.replace(subStr, upperSubStr)
                    console.log(rawActivationKey);
                }else{
                    let upperSubStr = subStr.toLowerCase();
                    rawActivationKey = rawActivationKey.replace(subStr, upperSubStr)
                    console.log(rawActivationKey);
                }
                break;
            case "Slice":
                let start = Number(actionLine[1]);
                let end = Number(actionLine[2]);
                let toSlice = rawActivationKey.substring(start, end);
                rawActivationKey = rawActivationKey.replace(toSlice, "");
                console.log(rawActivationKey);
                break;
        }
        index++;
        command = input[index];
    }
    console.log(`Your activation key is: ${rawActivationKey}`);

}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]);