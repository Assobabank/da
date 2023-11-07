
        let vowels = ["o", "a", "e", "i", "u"];
    
        function Vowel_Count(word) {
            let quantity = 0;
            for (let i = 0; i < word.length; i++) {
                for (let j = 0; j < vowels.length; j++) {
                    if (word[i] === vowels[j]) {
                        quantity++;
                    }
                }
            }
            return quantity;
        }
    
        let word = "manger";
        console.log(Vowel_Count(word));
