const speakers = [
    {
        name: "John Doe",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        title: "CEO, Tech Corp"
    },
    {
        name: "Jane Smith",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
        title: "CTO, Innovate Solutions"
    },
    {
        name: "Peter Jones",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026707d",
        title: "Lead Developer, Future Systems"
    },
    {
        name: "Mary Johnson",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026709d",
        title: "AI Researcher, Deep Mind"
    }
];

const speakerList = document.querySelector(".speaker-list");

speakers.forEach(speaker => {
    const speakerCard = document.createElement("div");
    speakerCard.classList.add("speaker-card");

    const speakerImage = document.createElement("img");
    speakerImage.src = speaker.image;
    speakerCard.appendChild(speakerImage);

    const speakerName = document.createElement("h3");
    speakerName.textContent = speaker.name;
    speakerCard.appendChild(speakerName);

    const speakerTitle = document.createElement("p");
    speakerTitle.textContent = speaker.title;
    speakerCard.appendChild(speakerTitle);

    speakerList.appendChild(speakerCard);
});