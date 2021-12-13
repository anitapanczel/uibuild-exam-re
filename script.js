window.addEventListener("load", init);

function init() {
    console.log("hello");

    let form = `
    <form>
        <h1>Visszajelzés</h1>
        <div><input type="text" placeholder="Tárgy"></div>
        <div><textarea placeholder="Megjegyzés" class="megjegyzes"></textarea></div>
        <div class="flex">
            <textarea class="checkbox"></textarea>
            <div class="feltetelek">Elolvastam és elfogadom az <a href="">Adatkezelési Tájékoztatót</a>.</div>
        </div>
        <div class="button"><button>Mentés</button></div>
    </form>`;

    document.getElementById("root").insertAdjacentHTML("beforeend", form);
}