export const drop_menu = (elem_selector, toggle_selector) => {
    const drop_button = document.querySelectorAll(`.${elem_selector}`)
    drop_button.forEach((el) => {
        el.onclick = function (e) {
            const current = this;
            const close = () => {
                current.classList.remove(toggle_selector);
                document.removeEventListener('click', close)
            }

            // e.preventDefault();
            [...drop_button]
                .filter(el => el.classList.contains(toggle_selector) && el != this)
                .forEach(el => el.classList.remove(toggle_selector))
            this.classList.toggle(toggle_selector);
            document.addEventListener('click', close)
        }
    })
}