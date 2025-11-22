function splitToLetters(element) {
    let $element = $(element);

    let text = $element.text();
    let letters = text.split('');
    
    // $container.append(content);
    // $content.appendTo(container);
    
    $element.text("");

    letters.forEach(letter => {
        $element.append($(`<span class="letter">${letter}</span>`));
    });
}

function randomizeLetterTransforms() {
    $(".HoverSplit").children(".letter").each(function(i, el) {
        const x = (Math.random() - 0.5) * 2 * 5;   // Random number -10 through 10.
        const y = (Math.random() - 0.5) * 2 * 5;   // Random number -10 through 10.
        const r = (Math.random() - 0.5) * 2 * 10;
        const rx = (Math.random() - 0.5) * 2 * 60;
        const ry = (Math.random() - 0.5) * 2 * 60; // -30 to 30 deg;
        const rz = (Math.random() - 0.5) * 2 * 60;

        const $el = $(el);
        $(el).data("transform", `translate(${x}px, ${y}px) rotate(${r}deg)`);
        // $el.data("transform", `translate(${x}px, ${y}px)`);
        // $el.data("transform", $el.data("transform") + ` rotate3d(1, 0, 0, ${rx}deg)`)
        // $el.data("transform", $el.data("transform") + ` rotate3d(0, 1, 0, ${ry}deg)`)
        // $el.data("transform", $el.data("transform") + ` rotate3d(0, 0, 1, ${rz}deg)`)
        // $el.data("transform", $el.data("transform") + ` scale(1.5, 1.5)`)
    });
}

function applyLetterTransforms($word) {
    $word.children(".letter").each(function(i, el) {
        let $el = $(el);
        let transformData = $el.data("transform");

        $el.css("transform", transformData);
    });
}

$(document).ready(function() {
    let elementsToSplit = $(".word-split-wrapper").children();
    $(elementsToSplit).each(function(i, el) {
        splitToLetters(el);
    });

    $(".HoverSplit").hover(
        function() { applyLetterTransforms($(this)); },
        function() { $(this).children(".letter").css("transform", "none"); }
    );

    randomizeLetterTransforms();
});

// let hoverIntervals = new Map(); // store intervals per word

// function startLetterFloat($word) {
//     const letters = $word.children(".letter");

//     // Make a new interval for this word
//     const intervalId = setInterval(() => {
//         letters.each(function() {
//             const $el = $(this);
//             const x = (Math.random() - 0.5) * 20; // small random movement
//             const y = (Math.random() - 0.5) * 20;
//             const r = (Math.random() - 0.5) * 5;  // small rotation

//             $el.css("transform", `translate(${x}px, ${y}px) rotate(${r}deg)`);
//         });
//     }, 300); // update every 100ms

//     hoverIntervals.set($word[0], intervalId);
// }

// function stopLetterFloat($word) {
//     // Stop the interval
//     clearInterval(hoverIntervals.get($word[0]));
//     hoverIntervals.delete($word[0]);

//     // Reset letters
//     $word.children(".letter").css("transform", "none");
// }

// $(document).ready(function() {
//     $(".HoverSplit").hover(
//         function() { startLetterFloat($(this)); },
//         function() { stopLetterFloat($(this)); }
//     );
// });

