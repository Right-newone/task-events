export function createButton() {
    const btn = document.createElement('button');
    btn.textContent = 'Удали меня';

    btn.addEventListener('click', () => {
        btn.remove();
    });

    document.body.append(btn);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');

    arr.forEach((itemText) => {
        const li = document.createElement('li');
        li.textContent = itemText;

        li.addEventListener('mouseover', () => {
            li.setAttribute('title', li.textContent);
        });

        ul.append(li);
    });

    document.body.append(ul);
}

export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';

    a.addEventListener(
        'click',
        (e) => {
            e.preventDefault();
            a.textContent += ' ' + a.getAttribute('href');
        },
        { once: true },
    );

    document.body.append(a);
}

export function createList() {
    const ul = document.createElement('ul');
    const firstLi = document.createElement('li');
    const btn = document.createElement('button');

    firstLi.textContent = 'Пункт';
    btn.textContent = 'Добавить пункт';

    ul.append(firstLi);
    document.body.append(ul);
    document.body.append(btn);

    ul.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.textContent += '!';
        }
    });

    btn.addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        ul.append(newLi);
    });
}
