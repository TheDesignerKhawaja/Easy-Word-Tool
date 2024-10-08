// EWT Popups
const togglePopup = popupID => {
    const popup = document.getElementById(popupID);
    if (popup && popup.getAttribute('aria-hidden') === 'true') {
        popup.setAttribute('aria-hidden', 'false');
    } else {
        popup.setAttribute('aria-hidden', 'true');
    }
}

// EWT Operations
const ewtOperations = {
    wordCount: text => text === "" ? 0 : text.trim().split(/\s+/).length,
    charCount: text => text.length
};

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('copyrightYear').textContent = (new Date()).getFullYear();
    
    const userTextarea = document.getElementById('userTextarea');
    const wordCountResults = document.querySelectorAll('.ewtWordCount');
    const charCountResults = document.querySelectorAll('.ewtCharCount');

    // Word/Character Counting
    userTextarea.addEventListener('input', () => {
        const text = userTextarea.value;
        wordCountResults.forEach(wcr => {
            wcr.textContent = ewtOperations.wordCount(text);
            wcr.classList.add('animateCount'); // Add Animation

            // Remove the class after a short delay to allow re-triggering of animation
            setTimeout(() => {
                wcr.classList.remove('animateCount');
            }, 1500);
        });
        charCountResults.forEach(ccr => {
            ccr.textContent = ewtOperations.charCount(text);
            ccr.classList.add('animateCount'); // Add Animation

            // Remove the class after a short delay to allow re-triggering of animation
            setTimeout(() => {
                ccr.classList.remove('animateCount');
            }, 1500);
        });
    });

});