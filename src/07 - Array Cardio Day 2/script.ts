interface Person {
  name: string;
  year: number;
}

interface Comment {
  text: string;
  id: number;
}

// ## Array Cardio Day 2

const people: Person[] = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments: Comment[] = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

const currentYear = new Date().getFullYear();
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some((person) => currentYear - person.year >= 19);
console.log('🚀 ~ file: script.ts ~ line 27 ~ isAdult', isAdult);

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every((person) => currentYear - person.year >= 19);
console.log('🚀 ~ file: script.ts ~ line 30 ~ allAdults', allAdults);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find((comment) => comment.id === 823423);
console.log('🚀 ~ file: script.ts ~ line 35 ~ comment', comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex((comment) => comment.id === 823423);
console.log('🚀 ~ file: script.ts ~ line 48 ~ index', index);
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
// comments.splice(index,1) other solution
console.log('🚀 ~ file: script.ts ~ line 50 ~ newComments', newComments);

// For export {} fix, see https://medium.com/@muravitskiy.mail/cannot-redeclare-block-scoped-variable-varname-how-to-fix-b1c3d9cc8206
export = {};
