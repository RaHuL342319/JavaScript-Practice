/* ### 1. Voting Eligibility
Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).
```js
console.log(isEligibleToVote(20)) // Eligible to vote
console.log(isEligibleToVote(18)) // Eligible to vote
console.log(isEligibleToVote(17)) // Not eligible to vote

*/
function isEligibleToVote(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}
// Example usage
console.log(isEligibleToVote(20)); // Eligible to vote
console.log(isEligibleToVote(18)); // Eligible to vote
console.log(isEligibleToVote(17)); // Not eligible to vote
