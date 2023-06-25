"use strict";

const swap  = document.getElementById('swap');
const logospan = document.querySelector(".type > span");


function sleep(ms) {
    return new Promise((resolve)=> setTimeout(resolve, ms));
}
const change = ['web', 'front-end', 'back-end', 'full stack'];

let sleeptime = 100;

let currChangeIndex = 0;

const writeloop = async () => {
    while (true) {
        let curChange = change[currChangeIndex];
        for (let i = 0; i< curChange.length; i++) {
            swap.innerText = curChange.substring(0, i + 1);
            await sleep(sleeptime);
        }
        await sleep(sleeptime * 10);
        
        for (let i = curChange.length; i > 0; i--) {
            swap.innerText = curChange.substring(0, i - 1);
            await sleep(sleeptime);
        }

        await sleep(sleeptime * 5);

        if(currChangeIndex === change.length - 1) {
            currChangeIndex = 0;
        } else {
            currChangeIndex++;
        }
    }
};

writeloop();
