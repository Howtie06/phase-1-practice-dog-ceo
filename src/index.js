
document.addEventListener("DOMContentLoaded", function() {
    console.log('%c HI', 'color: firebrick'); 

    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const img = document.createElement("img");
                img.src = imageUrl;
                document.getElementById("dog-image-container").appendChild(img);
            });
        })
        .catch(error => console.error("Error fetching dog images:", error));

    
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            const breedList = document.getElementById("dog-breeds");
            breeds.forEach(breed => {
                const li = document.createElement("li");
                li.textContent = breed;
                breedList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching dog breeds:", error));

    document.getElementById("dog-breeds").addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue"; 
        }
    });

    
    document.getElementById("breed-dropdown").addEventListener("change", function(event) {
        const selectedLetter = event.target.value;
        const breedList = document.getElementById("dog-breeds");
        const breedItems = breedList.getElementsByTagName("li");
        for (let i = 0; i < breedItems.length; i++) {
            const breedName = breedItems[i].textContent;
            if (breedName.startsWith(selectedLetter)) {
                breedItems[i].style.display = "list-item"; 
            } else {
                breedItems[i].style.display = "none"; 
            }
        }
    });
});