
const allConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if(target === '') return [[]];

    let result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map( way => [word, ...way]);
            result.push( ...targetWays);
        }
    }
    memo[target] = result;
    return result;
    
};

console.log(allConstruct("purple" , ["purp", "p", "ur", "le", "purpl"]))
console.log(allConstruct("abcedf", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "t"]));
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));

