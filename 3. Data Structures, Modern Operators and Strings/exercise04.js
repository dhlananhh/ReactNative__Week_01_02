// Coding Challenge #4


/*
        Write a program that receives a list of variable names written in underscore_case
    and convert them to camelCase.
        The input will come from a textarea inserted into the DOM (see code below to
    insert the elements), and conversion will happen when the button is pressed.

    Test data (pasted to textarea, including spaces):
        underscore_case
        first_name
        Some_Variable
        calculate_AGE
        delayed_departure

    Should produce this output (5 separate console.log outputs):
        underscoreCase ✅
        firstName ✅✅
        someVariable ✅✅✅
        calculateAge ✅✅✅✅
        delayedDeparture ✅✅✅✅✅

    Hints:
        § Remember which character defines a new line in the textarea 😉
        § The solution only needs to work for a variable made out of 2 words, like a_b
        § Start without worrying about the ✅. Tackle that only after you have the variable
        name conversion working 😉
        § This challenge is difficult on purpose, so start watching the solution in case
        you're stuck. Then pause and continue!
    
    Afterwards, test with your own test data!
    
    GOOD LUCK 😀

    document.body.append(document.createElement('textarea'));
    document.body.append(document.createElement('button'));
*/


// Selection & Creation of elements
const conversionContainerEl = document.querySelector('.conversion-container');
conversionContainerEl.style.display = 'flex';
conversionContainerEl.style.gap = 'var(--space-16)';

const outputContainerEl = document.querySelector('.output-container');

const textArea = document.createElement('textArea');
const convertBtn = document.createElement('button');

conversionContainerEl.append(textArea);
conversionContainerEl.append(convertBtn);

// Styling of elements
textArea.style.minHeight = 'calc(var(--space-128) + var(--space-64))';
textArea.style.padding = 'var(--space-16)';
textArea.style.border = '1px solid var(--clr-shade)';
textArea.style.borderRadius = 'var(--radius-5)';
textArea.style.display = 'flex';
textArea.style.flex = 1;
textArea.style.font = 'inherit';
textArea.style.fontSize = 'var(--font-16)';
textArea.style.letterSpacing = 'var(--letter-space-n05)';
textArea.style.lineHeight = 'var(--line-height-17)';
textArea.style.color = 'var(--clr-shade)';
textArea.style.backgroundColor = 'var(--clr-tint)';

convertBtn.textContent = 'Convert';
convertBtn.classList.add('btn', 'project-btn');
convertBtn.style.alignSelf = 'flex-end';

// Functionality of elements
convertBtn.addEventListener('click', function () {
    outputContainerEl.innerHTML = ''
    const text = textArea.value;
    const textInput = text.split('\n');

    for (const [i, name] of textInput.entries()) {
        const [first, second] = name.toLowerCase().trim().split('_');
        const conversion = first + second.replace(second[0], second[0].toUpperCase());
        const output = conversion.padEnd(20, ' ') + '✅'.repeat(i + 1);
        console.log(output);
        const newLine = document.createElement('p');
        newLine.style.color = 'var(--clr-grey-read)';
        newLine.style.letterSpacing = 'var(--letter-space-n05)';
        newLine.style.lineHeight = 'var(--line-height-17)';
        newLine.textContent = output;
        outputContainerEl.append(newLine)
    };
});