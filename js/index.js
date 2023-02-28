const el = document.getElementById('efect');
const height= el.clientHeight;
const width= el.clientWidth;


el.addEventListener('mousemove', (evt) => {
    const {layerX, layerY} = evt;

    const yRotation = (
        (layerX - width / 2) / width
        ) * 20;
    
    const xRotation = (
        (layerY - height / 2) / height
        ) * 20;

    const st = `
    perspective(500px)
    scale(1.1)
    rotateX(${xRotation}deg)
    rotateY(${yRotation}deg)`;

    el.style.transform = st;
});

el.addEventListener('mouseout', () => {
    el.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
});

const el2 = document.getElementById('efect2');
const height2= el2.clientHeight;
const width2= el2.clientWidth;


el2.addEventListener('mousemove', (evt) => {
    const {layerX, layerY} = evt;

    const yRotation2 = (
        (layerX - width2 / 2) / width2
        ) * 20;
    
    const xRotation2 = (
        (layerY - height2 / 2) / height2
        ) * 20;

    const st2 = `
    perspective(500px)
    scale(1.1)
    rotateX(${xRotation2}deg)
    rotateY(${yRotation2}deg)`;

    el2.style.transform = st2;
});

el2.addEventListener('mouseout', () => {
    el2.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
});