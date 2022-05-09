export function renderListItem(animal) {
    const link = document.createElement('a');
    const div = document.createElement('div');
    div.classList.add('animal');
    div.style.top = animal.top;
    div.style.left = animal.left;

    const img = document.createElement('img');
    img.src = `./assets/${animal.type}.svg`;
    link.href = `./animals/?id=${animal.id}`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = animal.name;
    nameSpan.classList.add('name');

    const span = document.createElement('span');
    span.textContent = animal.says;

    div.append(img, nameSpan, span);
    link.append(div);

    return link;
}
