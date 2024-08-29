const array1 = ["anna", "asd"];
const array2 = ["dfw", "anna", "nana", "adstronaut"];

//1. Raw code
let flag = false;
function truthful() {
if (flag) {
console.log("There definitely is an anagram here!")
return true
}
}
for (const key of array1) {
for (const lock of array2) {
const someKey = key.split('').sort().join()
const someLock = lock.split('').sort().join()
if (key.length === lock.length && someKey === someLock && !flag) {
if (key !== lock) {
flag = true;
truthful();
break;
} else {
console.log("There's no anagram here", key, lock)
}
}
}
}

//2. Map

function myMap(array1, array2) {
    let flag = false;

    array1.map(keyElement => {
        if (flag || !keyElement) return;

        const key = keyElement.split('').sort().join();

        array2.map(lock => {
            if (flag || !lock) return;

            const theRealLock = lock.split('').sort().join();
            if (keyElement.length === lock.length && key === theRealLock && keyElement !== lock) {
                console.log("There's an anagram!");
                flag = true;
            } else {
                console.log("No anagram here");
            }
        });

        if (flag) return;
    });
    console.log(flag);
    return flag;
}

myMap(array1, array2);

//3. Filter

function myFilter(array1, array2) {
    let flag = false;
    array1.filter(keyElement => {
        if (flag || !keyElement) return;
        const key = keyElement.split('').sort().join();
        array2.filter(lock => {
            if (flag || !lock) return;
            const theRealLock = lock.split('').sort().join();
            if (keyElement.length === lock.length && key === theRealLock && keyElement !== lock) {
                console.log("There's an anagram!");
                flag = true;
            } else {
                console.log("No anagram here");
            }
        });
        if (flag) return;
    });
    console.log(flag);
    return flag;
}

myFilter(array1, array2);