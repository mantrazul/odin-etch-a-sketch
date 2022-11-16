
console.log('hello')



const mainGrid = document.querySelector('#grid');


for (let i = 0; i < 16; i++ ) {
const content = document.createElement('div');
content.classList.add('test')
mainGrid.appendChild(content);
}


// content.innerHTML = ''

// const example = document.querySelector('div.test'); 

    
        const gridItems = document.querySelectorAll("#grid > div")

        gridItems.forEach((items => {
            const gridItem = items;
            gridItem.addEventListener("click", () => {
                gridItem.classList.add("test2")
                } );
        }))