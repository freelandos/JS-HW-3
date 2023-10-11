const book = document.querySelector('.book');
const fontSizesDiv = document.querySelector('.book__control_font-size');
const textColorsDiv = document.querySelector('.book__control_color');
const bgColorsDiv = document.querySelector('.book__control_background');

let bookSettings = {
    fontSize: null,
    textColor: null,
    bgColor: null,
};

document.addEventListener('click', (event) => {
    if (event.target.closest('.book__control_font-size') &&
        event.target.classList.contains('font-size')) {
        
        const activeFontSize = fontSizesDiv.querySelector('.font-size_active');
        const fontSize = event.target.getAttribute('data-size');

        event.preventDefault();
        activeFontSize.classList.remove('font-size_active');
        event.target.classList.add('font-size_active');
        bookSettings.fontSize = fontSize;
        
        applySettings(book, bookSettings);
    }

    if (event.target.closest('.book__control_color') &&
        event.target.classList.contains('color')) {

        const activeTextColor = textColorsDiv.querySelector('.color_active');
        const textColor = event.target.getAttribute('data-text-color');

        event.preventDefault();
        activeTextColor.classList.remove('color_active');
        event.target.classList.add('color_active');
        bookSettings.textColor = textColor;

        applySettings(book, bookSettings);
    }

    if (event.target.closest('.book__control_background') &&
        event.target.classList.contains('color')) {

        const activeBgColor = bgColorsDiv.querySelector('.color_active');
        const bgColor = event.target.getAttribute('data-bg-color');

        event.preventDefault();
        activeBgColor.classList.remove('color_active');
        event.target.classList.add('color_active');
        bookSettings.bgColor = bgColor;

        applySettings(book, bookSettings);
    }
})

function applySettings(bookElement, settings) {
    bookElement.className = 'book';

    if (settings.fontSize) {
        bookElement.classList.add(`book_fs-${settings.fontSize}`);
    }
    if (settings.textColor) {
        bookElement.classList.add(`book_color-${settings.textColor}`);
    }
    if (settings.bgColor) {
        bookElement.classList.add(`book_bg-${settings.bgColor}`);
    }
}