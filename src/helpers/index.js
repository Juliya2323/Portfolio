export function switchLock(navIsOpen) {
    const body = document.body;
    navIsOpen ? (body.classList.add("m-lock")) : (body.classList.remove("m-lock"));
}
  