const images = [
    "castle.PNG"
];

const getimage = images[Math.floor(Math.random() * images.length)];

const sendhtmlimg = document.createElement("img");
sendhtmlimg.src = `img/${getimage}`;

document.body.appendChild(sendhtmlimg);

console.log(sendhtmlimg);