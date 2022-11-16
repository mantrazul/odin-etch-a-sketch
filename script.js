
console.log('hello')



const mainGrid = document.querySelector('#grid');


for (let i = 0; i < 16; i++ ) {
const content = document.createElement('div');
content.classList.add('test')
mainGrid.appendChild(content);
}
  

        const gridItems = document.querySelectorAll("#grid > div")

        const paintButton = document.querySelector(".paint");

        paintButton.addEventListener("click", () => {
            paint()
        })


    function paint() {

            gridItems.forEach((items => {
                const gridItem = items;
                gridItem.addEventListener("click", () => {
                    gridItem.classList.add("test2")
                    } );
                    console.log("paint")
        }))
    }

 
    const eraseButton = document.querySelector(".erase");

    eraseButton.addEventListener("click", () => {
        erase()
    })


    function erase() {

        gridItems.forEach((items => {
            const gridItem = items;
            gridItem.addEventListener("click", () => {
                gridItem.classList.remove("test2")
                } );
                console.log("erase")
    }))
    }