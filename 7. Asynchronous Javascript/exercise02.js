let currentImage;

function createImage(imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = imgPath;

        img.onload = () => {
            document.querySelector('.images').appendChild(img);
            resolve(img);
        };

        img.onerror = () => {
            reject(new Error('Image load failed'));
        };
    });
}

function wait(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
}

async function loadImages() {
    try {
        // Thay đổi đường dẫn đến hình ảnh của bạn
        currentImage = await createImage('img/image1.png'); // Hình ảnh 1
        await wait(2);
        currentImage.style.display = 'none';

        currentImage = await createImage('img/image2.png'); // Hình ảnh 2
        await wait(2);
        currentImage.style.display = 'none';

        currentImage = await createImage('img/image3.png'); // Hình ảnh 3
        await wait(2);
        currentImage.style.display = 'none';

        currentImage = await createImage('img/image4.png'); // Hình ảnh 4
        await wait(2);
        currentImage.style.display = 'none';
    } catch (error) {
        console.error(error);
    }
}

loadImages();