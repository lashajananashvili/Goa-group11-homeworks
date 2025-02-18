const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg", 
];
  
function ImageGallery() {
    return (
    <div>
        <h2>ფოტოების გალერეა</h2>
            {images.map((url, index) => (
                <img key={index} src={url} alt={`Image ${index + 1}`} width="150" />
            ))}
    </div>
    );
  }
  