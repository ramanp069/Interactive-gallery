const galleryData = [
    { 
        src: 'image1.jpg', 
        title: 'Image 1', 
        description: 'This is the first image description.' 
    },
    { 
        src: 'image2.jpg', 
        title: 'Image 2', 
        description: 'This is the second image description.' 
    },
    { 
        src: 'image3.jpg', 
        title: 'Image 3', 
        description: 'This is the third image description.' 
    },
    {
        src: 'image4.jpg',
        title:'Image 4',
        description: 'This is the fourth image description.'
    },
    { 
        src: 'image5.jpg',
        title:'Image 5',
        description:'This is the fifth image description.'
    },
    {
        src: 'images6.jpg',
        title:'Image 6',
        description:'This is the six image description.'
    },
    { 
        src: 'images7.webp',
        title:'Image 7',
        description:'This is the seven image description.'
    },
    { 
        src: 'image8.jpg',
        title: 'Image 8',
        description:'This is the eighth image.'
    },
    { 
        src:'image9.jpg',
        title:'Image 9',
        description: 'This is ninth image.'
    },
    { 
        src:'image10.jpg',
        title: 'Image 10',
        description: 'This is tenth image.'
    },
    { 
        src:'image11.jpg',
        title:'Image 11',
        description:'This is eleventh image.'
    },
    { 
        src:'image12.jpg',
        title:'Image 12',
        description:'This is twelve.'
    }
];

const galleryContainer = document.getElementById('gallery');

galleryData.forEach((image) => {
    const imageItem = document.createElement('div');
    imageItem.classList.add('image-item');

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.title;

    const info = document.createElement('div');
    info.classList.add('image-info');
    <p>${image.description}</p>;

    imageItem.appendChild(img);
    imageItem.appendChild(info);
    galleryContainer.appendChild(imageItem);
});