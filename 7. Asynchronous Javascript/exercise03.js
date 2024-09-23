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

async function loadNPause() {
    try {
        let img1 = await createImage('img/image1.png'); // Hình ảnh 1
        await wait(2);
        img1.style.display = 'none';

        let img2 = await createImage('img/image2.png'); // Hình ảnh 2
        await wait(2);
        img2.style.display = 'none';

        let img3 = await createImage('img/image3.png'); // Hình ảnh 3
        await wait(2);
        img3.style.display = 'none';

        let img4 = await createImage('img/image4.png'); // Hình ảnh 4
        await wait(2);
        img4.style.display = 'none';
    } catch (error) {
        console.error(error);
    }
}

function wait(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
}

async function loadAll(imgArr) {
    const imgs = await Promise.all(imgArr.map(createImage));
    imgs.forEach(img => img.classList.add('parallel'));
    console.log(imgs);
}

// Gọi hàm loadNPause hoặc loadAll để kiểm tra
// loadNPause(); // Bỏ chú thích để sử dụng loadNPause
loadAll(['img/image1.png', 'img/image2.png', 'img/image3.png']); // Thay đổi đường dẫn cho phù hợp