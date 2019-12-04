//Set constants for later reference
const dataName = document.getElementById("dataName");
const dataValue = document.getElementById("dataValue");
const dataBtn = document.getElementById("dataBtn");
const dataOutput = document.getElementById("dataOutput");

//When button is clicked, store local data
dataBtn.onclick = function () {
    //get values from input
    const key = dataName.value;
    const value = dataValue.value;

    //check that input boxes aren't empty
    if (key && value) {
        
        //**Set name and value to local storage
        localStorage.setItem(key, value);   
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    dataOutput.innerHTML += "</p>" + key + ": " + value + "<br></p>";
}


