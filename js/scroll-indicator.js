export const hideIndicatorOnScroll = () => {
    const margini = document.getElementsByClassName('margini')[0];
    const indicator = document.getElementsByClassName('scroll-element')[0];

    margini.addEventListener('scroll', event => {
        const currentScroll = event.target.scrollTop;

        if (currentScroll > 0) {
            indicator.style.opacity = '0';
        }
    });
}