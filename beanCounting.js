"use strict";
const countBs = (x) => {
    let bCount = 0;
    x.split('').map((x) => {
        if (x == "B") {
            bCount++;
        }
    });
    console.log(`There are ${bCount} capital B's in this string`);
};
countBs("Bill has many Bruisers");
