let colors = ["H", "C", "S", "D"];
let numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
let card_array = [];
let cards_number = 7;
while (card_array.length < cards_number) {
  let card_to_add = colors[Math.floor(Math.random() * 4)] + numbers[Math.floor(Math.random() * 13)];
  if (card_array.indexOf(card_to_add) === -1) {
    card_array.push(card_to_add);
  }
};

console.log(card_array);

let five_from_seven = function(seven_long_array) {
  let result = [];
  result.push(seven_long_array.slice(0, 5));
  result.push(seven_long_array.slice(1, 6));
  result.push(seven_long_array.slice(2, 7));

  let array_4 = seven_long_array.slice(0, 4);
  array_4.push(seven_long_array[5]);
  result.push(array_4);
  let array_5 = seven_long_array.slice(0, 4);
  array_5.push(seven_long_array[6]);
  result.push(array_5);

  let array_6 = seven_long_array.slice(0, 3);
  array_6.push(seven_long_array[4]);
  array_6.push(seven_long_array[5]);
  result.push(array_6);
  let array_7 = seven_long_array.slice(0, 3);
  array_7.push(seven_long_array[4]);
  array_7.push(seven_long_array[6]);
  result.push(array_7);
  let array_8 = seven_long_array.slice(0, 3);
  array_8.push(seven_long_array[5]);
  array_8.push(seven_long_array[6]);
  result.push(array_8);

  let array_9 = seven_long_array.slice(0, 2);
  array_9.push(seven_long_array[3]);
  array_9.push(seven_long_array[4]);
  array_9.push(seven_long_array[5]);
  result.push(array_9);
  let array_10 = seven_long_array.slice(0, 2);
  array_10.push(seven_long_array[3]);
  array_10.push(seven_long_array[4]);
  array_10.push(seven_long_array[6]);
  result.push(array_10);
  let array_11 = seven_long_array.slice(0, 2);
  array_11.push(seven_long_array[3]);
  array_11.push(seven_long_array[5]);
  array_11.push(seven_long_array[6]);
  result.push(array_11);
  let array_12 = seven_long_array.slice(0, 2);
  array_12.push(seven_long_array[4]);
  array_12.push(seven_long_array[5]);
  array_12.push(seven_long_array[6]);
  result.push(array_12);

  let array_13 = [];
  array_13.push(seven_long_array[0]);
  array_13.push(seven_long_array[2]);
  array_13.push(seven_long_array[3]);
  array_13.push(seven_long_array[4]);
  array_13.push(seven_long_array[5]);
  result.push(array_13);
  let array_14 = [];
  array_14.push(seven_long_array[0]);
  array_14.push(seven_long_array[2]);
  array_14.push(seven_long_array[3]);
  array_14.push(seven_long_array[4]);
  array_14.push(seven_long_array[6]);
  result.push(array_14);
  let array_15 = [];
  array_15.push(seven_long_array[0]);
  array_15.push(seven_long_array[2]);
  array_15.push(seven_long_array[3]);
  array_15.push(seven_long_array[5]);
  array_15.push(seven_long_array[6]);
  result.push(array_15);
  let array_16 = [];
  array_16.push(seven_long_array[0]);
  array_16.push(seven_long_array[2]);
  array_16.push(seven_long_array[4]);
  array_16.push(seven_long_array[5]);
  array_16.push(seven_long_array[6]);
  result.push(array_16);
  let array_17 = [];
  array_17.push(seven_long_array[0]);
  array_17.push(seven_long_array[3]);
  array_17.push(seven_long_array[4]);
  array_17.push(seven_long_array[5]);
  array_17.push(seven_long_array[6]);
  result.push(array_17);

  let array_18 = [];
  array_18.push(seven_long_array[1]);
  array_18.push(seven_long_array[2]);
  array_18.push(seven_long_array[3]);
  array_18.push(seven_long_array[4]);
  array_18.push(seven_long_array[6]);
  result.push(array_18);
  let array_19 = [];
  array_19.push(seven_long_array[1]);
  array_19.push(seven_long_array[2]);
  array_19.push(seven_long_array[3]);
  array_19.push(seven_long_array[5]);
  array_19.push(seven_long_array[6]);
  result.push(array_19);
  let array_20 = [];
  array_20.push(seven_long_array[1]);
  array_20.push(seven_long_array[2]);
  array_20.push(seven_long_array[4]);
  array_20.push(seven_long_array[5]);
  array_20.push(seven_long_array[6]);
  result.push(array_20);
  let array_21 = [];
  array_21.push(seven_long_array[1]);
  array_21.push(seven_long_array[3]);
  array_21.push(seven_long_array[4]);
  array_21.push(seven_long_array[5]);
  array_21.push(seven_long_array[6]);
  result.push(array_21);

  return result
}

console.log(five_from_seven(card_array));

// High Card: Hands which do not fit any higher category are ranked by the value of their highest card. If the highest cards have the same value, the hands are ranked by the next highest, and so on. Strength: 0 - 160 000
// Pair: 2 of the 5 cards in the hand have the same value. Hands which both contain a pair are ranked by the value of the cards forming the pair. If these values are the same, the hands are ranked by the values of the cards not forming the pair, in decreasing order. Strength: 160 000 - 320 000
// Two Pairs: The hand contains 2 different pairs. Hands which both contain 2 pairs are ranked by the value of their highest pair. Hands with the same highest pair are ranked by the value of their other pair. If these values are the same the hands are ranked by the value of the remaining card. Strength: 320 000 - 325 000
// Three of a Kind: Three of the cards in the hand have the same value. Hands which both contain three of a kind are ranked by the value of the 3 cards. Strength: 325 000 - 340 000
// Straight: Hand contains 5 cards with consecutive values. Hands which both contain a straight are ranked by their highest card. Strength: 340 000 - 340 015
// Flush: Hand contains 5 cards of the same suit. Hands which are both flushes are ranked using the rules for High Card. 350 000 - 510 000
// Full House: 3 cards of the same value, with the remaining 2 cards forming a pair. Ranked by the value of the 3 cards. 510 000 - 510 500
// Four of a kind: 4 cards with the same value. Ranked by the value of the 4 cards. 510 500 - 511 000
// Straight flush: 5 cards of the same suit with consecutive values. Ranked by the highest card in the hand. 511000 -


let highCardValidator = function(number_array) {
  let result = 0;
  number_array = number_array.sort((a, b) => a - b);
  for (let i = 0; i < number_array.length; i++) {
    result += number_array[i]*(10**i)
  }
  return result;
}

let flushValidator = function(five_number_array) {
  let result = 0;
  five_number_array = five_number_array.sort((a, b) => a - b);
  if (five_number_array[0] + 1 === five_number_array[1] && five_number_array[0] + 2 === five_number_array[2] && five_number_array[0] + 3 === five_number_array[3] && (five_number_array[0] + 4 === five_number_array[4] || five_number_array[0] + 12 === five_number_array[4])) {
    if (five_number_array[0] === 2 && five_number_array[4] === 14) {
      result = 511000 + 5;
    } else {
      result = 511000 + five_number_array[4]
    }
  } else {
    result = 350000 + highCardValidator(five_number_array);
  }
  return result;
}

let pokerValidator = function(five_number_array) {
  let result = 0;
  five_number_array = five_number_array.sort((a, b) => a - b);
  if (five_number_array[0] === five_number_array[1] && five_number_array[0] === five_number_array[2] && five_number_array[0] === five_number_array[3]) {
    result = 510500 + five_number_array[4] + 15*five_number_array[0]
  } else if (five_number_array[4] === five_number_array[1] && five_number_array[4] === five_number_array[2] && five_number_array[4] === five_number_array[3]) {
    result = 510500 + five_number_array[0] + 15*five_number_array[4]
  }
  return result;
}

let fullHouseValidator = function(five_number_array) {
  let result = 0;
  five_number_array = five_number_array.sort((a, b) => a - b);
  if ((five_number_array[0] === five_number_array[1] && five_number_array[0] === five_number_array[2]) && five_number_array[3] === five_number_array[4]) {
    result = 510000 + 15*five_number_array[0] + five_number_array[4];
  } else if (five_number_array[0] === five_number_array[1] && (five_number_array[2] === five_number_array[3] && five_number_array[3] === five_number_array[4])) {
    result = 510000 + five_number_array[0] + 15*five_number_array[4];
  }
  return result;
}

let straightValidator = function(five_number_array) {
  let result = 0;
  five_number_array = five_number_array.sort((a, b) => a - b);
  if (five_number_array[0] + 1 === five_number_array[1] && five_number_array[0] + 2 === five_number_array[2] && five_number_array[0] + 3 === five_number_array[3] && (five_number_array[0] + 4 === five_number_array[4] || five_number_array[0] + 12 === five_number_array[4])) {
    if (five_number_array[0] === 2 && five_number_array[4] === 14) {
      result = 340000 + 5;
    } else {
      result = 340000 + five_number_array[4]
    }
  }
  return result;
}

let drillValidator = function(five_number_array) {
  let result = 0;
  five_number_array = five_number_array.sort((a, b) => a - b);
  if (five_number_array[0] === five_number_array[1] && five_number_array[0] === five_number_array[2]) {
    result = 325000 + five_number_array[3] + 11*five_number_array[4] + five_number_array[2]*1000;
  } else if (five_number_array[1] === five_number_array[2] && five_number_array[1] === five_number_array[3]) {
    result = 325000 + five_number_array[0] + 11*five_number_array[4] + five_number_array[2]*1000;
  } else if (five_number_array[2] === five_number_array[3] && five_number_array[2] === five_number_array[4]) {
    result = 325000 + five_number_array[0] + 11*five_number_array[1] + five_number_array[2]*1000;
  }
  return result;
}

let twoPairsValidator = function(five_number_array) {
  let result = 0;
  five_number_array = five_number_array.sort((a, b) => a - b);
  if (five_number_array[0] === five_number_array[1] && five_number_array[2] === five_number_array[3]) {
    result = 320000 + five_number_array[4] + 15*five_number_array[0] + five_number_array[2]*225;
  } else if (five_number_array[0] === five_number_array[1] && five_number_array[3] === five_number_array[4]) {
    result = 320000 + five_number_array[2] + 15*five_number_array[0] + five_number_array[3]*225;
  } else if (five_number_array[1] === five_number_array[2] && five_number_array[3] === five_number_array[4]) {
    result = 320000 + five_number_array[0] + 15*five_number_array[1] + five_number_array[3]*225;
  }
  return result;
}

let pairValidator = function(five_number_array) {
  let result = 0;
  five_number_array = five_number_array.sort((a, b) => a - b);
  if (five_number_array[0] === five_number_array[1]) {
    result = 160000 + five_number_array[2] + 10*five_number_array[3] + five_number_array[4]*100 + five_number_array[0]*10000;
  } else if (five_number_array[1] === five_number_array[2]) {
    result = 160000 + five_number_array[0] + 10*five_number_array[3] + five_number_array[4]*100 + five_number_array[1]*10000;
  } else if (five_number_array[2] === five_number_array[3]) {
    result = 160000 + five_number_array[0] + 10*five_number_array[1] + five_number_array[4]*100 + five_number_array[2]*10000;
  } else if (five_number_array[3] === five_number_array[4]) {
    result = 160000 + five_number_array[0] + 10*five_number_array[1] + five_number_array[2]*100 + five_number_array[3]*10000;
  }
  return result;
}

let validator = function(five_cards_array) {
  console.log(five_cards_array);
  let result = 0;

  let five_number_array = [];
  for (let i = 0; i < 5; i++) {
    if (five_cards_array[i].charAt(1) >= 2 && five_cards_array[i].charAt(1) <= 9) {
      five_number_array.push(five_cards_array[i].charAt(1));
    } else if (five_cards_array[i].charAt(1) === 'T') {
      five_number_array.push(10);
    } else if (five_cards_array[i].charAt(1) === 'J') {
      five_number_array.push(11);
    } else if (five_cards_array[i].charAt(1) === 'Q') {
      five_number_array.push(12);
    } else if (five_cards_array[i].charAt(1) === 'K') {
      five_number_array.push(13);
    } else if (five_cards_array[i].charAt(1) === 'A') {
      five_number_array.push(14);
    };
  }

  if (five_cards_array[0].charAt(0) === five_cards_array[1].charAt(0) &&
    five_cards_array[0].charAt(0) === five_cards_array[2].charAt(0) &&
    five_cards_array[0].charAt(0) === five_cards_array[3].charAt(0) &&
    five_cards_array[0].charAt(0) === five_cards_array[4].charAt(0) ) {
    result = flushValidator(five_number_array);
  } else {
    result = pokerValidator(five_number_array) + fullHouseValidator(five_number_array) + straightValidator(five_number_array);
    if (result === 0) {
      result = drillValidator(five_number_array) + twoPairsValidator(five_number_array);
      if (result === 0) {
        result = pairValidator(five_number_array);
        if (result === 0) {
          result = highCardValidator(five_number_array);
        }
      }
    }
  }
  console.log(result);
  return result;
}

five_from_seven(card_array).forEach(function(el) {
  validator(el);
})
