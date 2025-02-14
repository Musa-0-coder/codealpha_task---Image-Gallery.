const images = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1516972810927-80185027ca84?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1542779283-429940ce8336?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9rZW1vbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1738924349706-14d70715e236?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1738316849598-8cbe1e5ca3f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Qm4tRGpyY0Jyd298fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1495231916356-a86217efff12?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1738696693336-7a24cea4e6f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1738597967526-fca7534cdd5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1735405817208-79a2fd79e18b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1736266738178-2d19dae0816e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1622960748096-1983e5f17824?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1548304862-8d3e78f8c9b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1737505648282-ec199d4a6459?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1737898378300-0e64a5f6c52d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1739081711392-3cc8b159c415?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1627440829335-b42fba2a15dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VwZXJjYXJzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1563826773-1e2b4b2cde42?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJNV3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1688045617936-14ac260f13d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjByb3NlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1580124917341-d318cbacc34f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwcm9zZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1638162438698-3c518e34769c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwcm9zZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1738705466275-1f94be26c5bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1585543253202-04d3d9f11961?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8X2hiLWRsNFEtNFV8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1557676715-93b39337b8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg5fF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1738700547634-f1735facf1a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1732668021280-5af913d4f3a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1737103515455-ce1751de5868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1529135942918-ca55bb398f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vbnVtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1738165170747-ecc6e3a4d97c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1735597821463-05f8cbd08fca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEQ0SEA0NEQ8RCg8ODxAQDg8SEA0PFRUWFhURFhUYHCggGBomGxUTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0PDisZFRkrKysrKy0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAScAqwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQMEBQIGB//EADMQAAIBAwIEBAQFBQEBAAAAAAABAgMRIQQxEkFRYQVxgZEiodHwMkJyseETUpLB8VMV/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD8NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgCASAIBIAgEkAAAAAAAAAASQAAAAAkCASQBIAAAAAAAAAAAAAAAAAAAAAAAAAAMglkASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATYCCUg0XWtKNt1b1dgKAWVaXC2nuisAAAAAAAAAAAAAAAAAAABKIRq09FXjezusro+QFHBvlY+ZqpUW4y/T9/s/c8VKD4rbvr2Nmnw0lyu5dsFGKVP8OPyv92XSpcTV5WUuai5WxtZeRZPPDJJ2vfa7V1bK80e4U03dJ33wmkvkBnq6NRtZ1LWbcpU+FLot2ZJwtzW18O516tG+6X7N+phrU0uK6za0bXtf+AMZZGi2rpX3wt0TCldpPma4pK74cJcPZPqiDDKDWWmlybTyeS/Vb+iv0KAAAAAAAAAAAAAAD3R3ztz8jrabSxeXZ9M3VunVHP0co3inFZun3vsztwppbK3oBTPSx/tW/chUOSxzxi5qt92Z5cOy9mUZHQ3za7yuj6l9KGM2b65LFBdF7EpdvkwPLj95Mtajn4YXlbDb+FGy3b5fyPT5fyBy50FFRUnl1Ltrlj/AIeqUUnKyT+F/Ff4V1k+nke6lWLcpNJ2bjFWvbbNu7Zg1OplLG0U8RSsvUDxqppydtrJLvbF/wDZUAQAAAAAAAAAAAAABHe0Nfjiuqw0cEtoVnB3i/5XQD6EzV4yWf6k7X2UVj5HrSaxVOqdspsunnHq88kUYadVt2/qT4rr8v8AqxtppreSl6JFVCHxSl1dr+Rpv3fuBF/u5k1+q4ItK/E17Lqe9VquFWjeUnyu8eZx6nF8XFe7y7gU3IAIAAAAAAAAAAAAAAAAAAAmMmndOzO7o6jdPjlu087XSvn9ziUYcUox6ySO3rHwxUI7WUVbot/vuAo1oqKvJXt1z7HtScuTivm/oZ6NLP8Aw2RXl7lEQpJcjB4nDe3Kmv3OjKVt2l6mKq1L+pd4aSA4wNFTRyjm111X0KLEEAkgAAAAAAAAAAAAAAABIDf4NTvPi5Ri36vCNernerFdIN+rZPh1Lghs3Ju8tsdEeXo5ynx8UUsd2BrguFK+W+Sy2erSe9orvmX0JxDL362y+yM1eSy5tpcop29yia1aMFJq8mllv67L0KqdVSzPGNjDqK/HaKSUU9kFKK3fotwOtTkpbFGr09PeVo91h/yYpeINK0IpLq8syVKjlltt9yCJ2u7Ntcr7nkkgAAAAAAAAAAAAAAG3wyGXP+1Y/U9jHDdeZ2aFK3DG2V8cv1Pl6AaaKUIq7yk3J9Xuz0pNq6xdYujxKHE7cll7b8keqkkuebFFUNPLi4nVl0sorYsqaelZ8Sv1lJ5KqunqyXwy4c83lry5GOr4dVe84vzmQZtZpnTe94v8L69n3M9zfq6klB0524lJf473OeAAAAAAAAAAAAAAAAAAJir7dQNfh1G74uSePM6dJfdymhDhil03235mukvuyAm1l3JjG3d9WTfy9keK1aME5O1l237FFWr1qhdN/FbCscuXiFR/mt5JFFaq5ycnzfsuhWyDVV1PHH4vxJ4fYzMgAAAAAAAAAAAAAAAAADo+HUklxbt7dEc9K9l1djtUoWSSXICyKL0eIw8/YyeKVnFRSbTb+RRdqdbGGL3l0VvmcjVamVR3ey2S2RQCAAAAAAAAAAAAAAAAAAAAAA0aKF5dkrnWgjD4fTxfqzpxiUEjj+JVeKfaKt9TsVHwpvsfPSd7vq7kHkAAAAAAAAAAAAAAAAAAAQAJBAA2UdbwpLhTsupf/wDWf/mv8n9DmADdqPEXNW4Uu9zFcgASCABIIAEggASCABIIAEggASCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z",
    "https://images.unsplash.com/photo-1735835590796-7032476e7d48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyMXw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1686154745256-a8e36d3e2a9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MHw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1735174573101-89f986efd912?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3N3w2c01WalRMU2tlUXx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFya3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRhcmt8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1676139292936-a2958a0d7177?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1577132161035-1a187871ec13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwbmlnaHR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1527842891421-42eec6e703ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9vbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1527843812948-a8c2ddd2fb68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrfGVufDB8fDB8fHww"

];

let currentIndex = 0;
let selectedImages = [];
let deletedImages = [];
let selectionMode = false;

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const editBtn = document.getElementById('edit');

// Function to display images in the gallery
function displayImages() {
    gallery.innerHTML = ''; // Clear existing images
    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = `Image ${index + 1}`;
        imgElement.classList.add('gallery-image');
        imgElement.addEventListener('click', () => {
            if (selectionMode) {
                imgElement.classList.toggle('selected');
                if (selectedImages.includes(index)) {
                    selectedImages = selectedImages.filter(i => i !== index);
                } else {
                    selectedImages.push(index);
                }
            } else {
                lightbox.style.display = 'flex';
                lightboxImg.src = image;
                currentIndex = index;
                updateNavButtons();
            }
        });
        gallery.appendChild(imgElement);
    });
}

// Function to show the current image in the lightbox
function showImage(index) {
    lightboxImg.src = images[index];
    updateNavButtons();
}

// Function to update the visibility of navigation buttons
function updateNavButtons() {
    prevBtn.style.display = (currentIndex > 0) ? 'block' : 'none';
    nextBtn.style.display = (currentIndex < images.length - 1) ? 'block' : 'none';
}

// Event listeners for lightbox controls
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showImage(currentIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showImage(currentIndex);
    }
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Feature bar functionality
document.getElementById('add-album').addEventListener('click', () => {
    const newImageUrl = prompt('Enter the URL of the new image:');
    if (newImageUrl) {
        images.push(newImageUrl);
        displayImages();
    }
});

editBtn.addEventListener('click', () => {
    alert('Edit feature is not implemented yet.');
});

document.getElementById('select').addEventListener('click', () => {
    selectionMode = !selectionMode;
    if (selectionMode) {
        document.getElementById('select').textContent = 'Cancel Selection';
    } else {
        document.getElementById('select').textContent = 'Select';
        selectedImages = [];
        document.querySelectorAll('.gallery-image.selected').forEach(img => img.classList.remove('selected'));
    }
});

document.getElementById('delete').addEventListener('click', () => {
    if (selectedImages.length > 0) {
        selectedImages.sort((a, b) => b - a).forEach(index => {
            deletedImages.push(images[index]);
            images.splice(index, 1);
        });
        selectedImages = [];
        displayImages();
    } else {
        alert('No images selected for deletion.');
    }
});

document.getElementById('restore').addEventListener('click', () => {
    if (deletedImages.length > 0) {
        const restoredImage = deletedImages.pop();
        images.push(restoredImage);
        displayImages();
    } else {
        alert('No images to restore.');
    }
});

document.getElementById('settings').addEventListener('click', () => {
    alert('Settings feature is not implemented yet.');
});

// Initialize the gallery
document.addEventListener('DOMContentLoaded', () => {
    displayImages();
});