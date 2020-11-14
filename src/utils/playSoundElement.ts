 const playSoundElement = (id: string) => {
    const el: any = document.getElementById(id);
    el.play();
}

export default playSoundElement;