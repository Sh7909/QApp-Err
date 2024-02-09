const post = document.getElementById('post');
const color = document.getElementById('color');
const show = document.getElementById("show");
const sub1 = document.getElementById("sub1");
const fav = document.getElementById("fav");
const quoteerror = document.getElementById("quote_error")
color.addEventListener('change', () => {
    post.style.backgroundColor = `${color.value}`;
});
document.getElementById('post').addEventListener('blur', function () {
    const postInput = this.value;
    const quoteError = document.getElementById('quote_error');
    if (postInput.length > 100) {
        quoteError.style.display = 'block';
    } else {
        quoteError.style.display = 'none';
    }
});
