function replaceWords() {
    
    var commentContent = "Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.";
    // console.log(commentContent);
    var badWords = ["dolor", "elit", "quis", "nisi", "fugiat", "proident", "laborum"];
    // console.log(commentContent);
    var censored = censore(commentContent, badWords);
    commentContent = censored;
    return censored
}

function censore(string, filters) {
    // "i" is to ignore case and "g" for global
    var regex = new RegExp(filters.join("|"), "gi");
    // console.log(regex);
    return string.replace(regex, function (match) {
        //replace each letter with a star
        var stars = '';
        for (var i = 0; i < match.length; i++) {
            stars += '*';
        }
        return stars;
    });

}

console.log(replaceWords())