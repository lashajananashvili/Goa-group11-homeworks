let favoriteColors: string[] = [];

function addToFavorites(...colors: string[]): void {
    favoriteColors.push(...colors);
}

function displayColors(): void {
    const colorsList = document.getElementById('colorsList') as HTMLUListElement;
    colorsList.innerHTML = '';
    
    favoriteColors.forEach(color => {
        const li = document.createElement('li');
        li.textContent = color;
        li.style.color = color.toLowerCase();
        colorsList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const addColorBtn = document.getElementById('addColorBtn') as HTMLButtonElement;
    const showColorsBtn = document.getElementById('showColorsBtn') as HTMLButtonElement;
    const colorInput = document.getElementById('colorInput') as HTMLInputElement;
    
    addColorBtn.addEventListener('click', () => {
        const color = colorInput.value.trim();
        if (color) {
            addToFavorites(color);
            colorInput.value = '';
        }
    });
    
    showColorsBtn.addEventListener('click', displayColors);
    
    colorInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addColorBtn.click();
        }
    });
});