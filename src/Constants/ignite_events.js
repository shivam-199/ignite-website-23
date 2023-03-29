const EVENTS = [
	{
		id: 0,
		name: "Tic Tac Toe",
		desc: "Join us as we reinvent a beloved childhood game to help students understand hardware programming (FPGA)! The event is a short workshop on the basics of FPGA technology and programming, culminating in the ‘cut-throat’ game of Tic Tac Toe.",
		banner: "/ignite/assets/banner/IGNITE_event_posters4.jpg",
		backgroundColor: "#000000",
		date: "April 3, 2023",
		time: "08:00 Hrs",
		venue: "Central Arcade",
	},
	{
		id: 1,
		name: "Scratch: Logic Building",
		desc: "Have you ever wanted to create your own game? Well, you have come to the right place! We will take you through a short journey of understanding programming and game development, post which you can use the Scratch platform to create simple games, animations, and interactive stories!",
		banner: "/ignite/assets/banner/IGNITE_event_posters5.jpg",
		backgroundColor: "#000000",
		date: "April 3, 2023",
		time: "08:00 Hrs",
		venue: "Central Arcade",
	},

	{
		id: 2,
		name: "NFT Airdrop",
		desc: "Is it art? Is it money? Is it stocks? If such doubts plagued you when NFTs and Airpdrops burst onto the tech scene, we have got you covered. Come and be a part of our showcase that educates you about NFTs and blockchain and allows you to mint a new, customized NFT directly into your wallets.",
		banner: "/ignite/assets/banner/IGNITE_event_posters3.jpg",
		backgroundColor: "#000000",
		date: "April 3, 2023",
		time: "08:00 Hrs",
		venue: "Central Arcade",
	},

	{
		id: 3,
		name: "Lab Hunt",
		desc: "10 teams. 5 Clues. 1 battleground. Put your thinking caps on and gear up for a treasure hunt like no other! Welcome to IITGN’s Lab Hunt, where participants will solve cryptic clues to unravel their next destination. Channel your inner Sherlock Holmes and think creatively as we take you on a unique adventure through the myriad research labs of IITGN.",
		banner: "/ignite/assets/banner/IGNITE_event_posters7.jpg",
		backgroundColor: "#000000",
		date: "April 3, 2023",
		time: "08:00 Hrs",
		venue: "Central Arcade",
	},

	// {
	// 	id: 4,
	// 	name: "TL Event",
	// 	desc: "Do you love to fiddle with objects when lost in thought? Do you constantly take apart and put together household items? Congratulations! You are a Tinkerer! IITGN welcomes you to engage with fellow campus tinkerers and participate in the special exhibition curated by them for you.",
	// 	banner: "/assets/banner/IGNITE_event_posters7.jpg",
	// 	backgroundColor: "#000000",
	// 	date: "April 3, 2023",
	// 	time: "08:00 Hrs",
	// 	venue: "Central Arcade",
	// },

	{
		id: 5,
		name: "Silent DJ",
		desc: "Step into the world of enthralling music and rhythm without making a peep! Groove to your favourite beats and immerse yourself in the world of music and dance through headphones. Have the time of your life in the Silent DJ that has been set up for you all!",
		banner: "/ignite/assets/banner/IGNITE_event_posters.jpg",
		backgroundColor: "#000000",
		date: "April 3, 2023",
		time: "08:00 Hrs",
		venue: "Central Arcade",
	},

	// {
	// 	id: 6,
	// 	name: "CCL Exhibit",
	// 	desc: "Want to join the team that aims to challenge the Guinness World Record? If yes, join us in creating an exhibit using the most push pins to honour and celebrate an acclaimed scientist. Come and be a part of record-breaking by just pushing a pin!",
	// 	banner: "/ignite/assets/banner/IGNITE_event_posters.jpg",
	// 	backgroundColor: "#000000",
	// 	date: "April 3, 2023",
	// 	time: "08:00 Hrs",
	// 	venue: "Central Arcade",
	// },

	{
		id: 7,
		name: "Brain bytes: A Quiz",
		desc: "Get ready to flex your scientific and technological muscles in our ultimate showdown! Band together with your friends and challenge your competitors in a fun-filled competition. Grab this chance to showcase your knowledge and win exciting prizes!",
		banner: "/ignite/assets/banner/IGNITE_event_posters6.jpg",
		backgroundColor: "#000000",
		date: "April 3, 2023",
		time: "08:00 Hrs",
		venue: "Central Arcade",
	},

	{
		id: 8,
		name: "Research Showcase",
		desc: "The research labs of IITGN present to you a SciTech exhibition that breaks down complex research and scientific concepts using models, experimental set-ups, and demos. From molecular biology and evolution to chemical reactions and robotics, this showcase is your one-stop experience to glimpse into the dynamic research ecosystem of IITGN.",
		banner: "/ignite/assets/banner/IGNITE_event_posters8.jpg",
		backgroundColor: "#000000",
		date: "April 3, 2023",
		time: "08:00 Hrs",
		venue: "Central Arcade",
	},

	{
		id: 5,
		name: "Space Scounts",
		desc: "For astronomy lovers and future astronauts, we have a treat in store for you! Explore the universe beyond our blue planet through our special telescopes and be entranced by sunspots, nebulae, distant star clusters, and more. Get ready to be enthralled!",
		banner: "/ignite/assets/banner/IGNITE_event_posters9.jpg",
		backgroundColor: "#000000",
		date: "April 3, 2023",
		time: "08:00 Hrs",
		venue: "Central Arcade",
	},

	{
		id: 5,
		name: "SCI FLIX",
		desc: "Too hot to roam around during the Sci-Tech Fair in the afternoon? Don’t worry! Beat the heat in our makeshift “movie hall” with screenings of awesome SciTech-themed entertainment. So, come and find out what's in store for you...Bollywood, Hollywood, anime, or your favourite cartoons!",
		banner: "/ignite/assets/banner/IGNITE_event_posters10.jpg",
		backgroundColor: "#000000",
		date: "April 3, 2023",
		time: "08:00 Hrs",
		venue: "Central Arcade",
	},

	{
		id: 5,
		name: "Maker Bhavan Workshop",
		desc: "Blending experiential learning, design thinking, creativity, and innovation is Maker Bhavan’s USP! Register for their workshop and familiarise yourself with novel state-of-the-art technologies, such as 3D printing, 3D scanning, laser cutting technologies, and more.",
		banner: "/ignite/assets/banner/IGNITE_event_posters12.jpg",
		backgroundColor: "#000000",
		date: "April 3, 2023",
		time: "08:00 Hrs",
		venue: "Central Arcade",
	},

	{
		id: 5,
		name: "Resist-a-Quake",
		desc: "Learn the basics of structural engineering from IITGN experts. Apply your knowledge by creating 3D structures with popsicle sticks and win prizes if can withstand an earthquake!",
		banner: "/ignite/assets/banner/IGNITE_event_posters11.jpg",
		backgroundColor: "#000000",
		date: "April 3, 2023",
		time: "08:00 Hrs",
		venue: "Central Arcade",
	},
];

export default EVENTS;
