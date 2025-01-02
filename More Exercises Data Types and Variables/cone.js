function cone(radius, height) {
    let volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    let baseArea = radius * radius *  3.14159265359;
    let s = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let latureArea = Math.PI * radius * s;
    let area = baseArea + latureArea;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3.3, 7.8);