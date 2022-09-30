const findSum = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    } return sum;
};

const findFrequency = function (array) {
    counts = {};
    for (let i = 0; i < array.length; i++) {
        if (counts.hasOwnProperty(array[i])) {
            counts[array[i]] += 1;
        } else {
            counts[array[i]] = 1;
        }
    }
    var max = 0;
    var min = 0;
    var result = {};
    for (prop in counts) {
        if (counts[prop] > max) {
            max = counts[prop];
            min = max;
            result['most'] = prop;
        }
        else if (counts[prop] < min) {
            min = counts[prop];
            result['least'] = prop;
        }
    } return result;
};

const isPalindrome = function (str) {
    reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    } if (str == reversed) {
        return true;
    } return false;
};

const largestPair = function (array) {
    var large = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] * array[i + 1] > large) {
            large = array[i] * array[i + 1];
        }
    } return large;
};

const removeParenth = function (str) {
    var removeStart = 0;
    var removeEnd = 0;
    on = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            removeStart = i
        };
        if (str[i] === ')') {
            removeEnd = i
        }
    }
    part1 = str.substring(0, removeStart);
    part2 = str.substring(removeEnd + 1);
    return part1 + part2;
};

const scoreScrabble = function (str) {
    const scores = {
        "a": 1, "b": 3, "c": 3, "d": 2, "e": 1,
        "f": 4, "g": 2, "h": 4, "i": 1, "j": 8,
        "k": 5, "l": 1, "m": 3, "n": 1, "o": 1,
        "p": 3, "q": 10, "r": 1, "s": 1, "t": 1,
        "u": 1, "v": 4, "w": 4, "x": 8, "y": 4,
        "z": 10
    }
    var total = 0;
    for (let i = 0; i < str.length; i++) {
        total += scores[str[i]];
    }
    return total;
};
