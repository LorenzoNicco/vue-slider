// const slides = [
// {
//     image: 'img/01.webp',
//         title: 'Marvel\'s Spiderman Miles Morale',
//         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     }, {
//         image: 'img/02.webp',
//         title: 'Ratchet & Clank: Rift Apart',
//         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     }, {
//         image: 'img/03.webp',
//         title: 'Fortnite',
//         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//     }, {
//         image: 'img/04.webp',
//         title: 'Stray',
//         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     }, {
//         image: 'img/05.webp',
//         title: "Marvel's Avengers",
//         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//     }
// ];

// console.log(slides);

const { createApp } = Vue;

createApp ({
    data () {
        return {
            slideIndex: 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            thumbs: [
                {
                    image: 'img/01.webp'
                },
                {
                    image: 'img/02.webp'
                },
                {
                    image: 'img/03.webp'
                },
                {
                    image: 'img/04.webp'
                },
                {
                    image: 'img/05.webp'
                }
            ]
        }
    },
    methods: {
        // versione 1
        // controls: function(direction) {
        //     const thumbs = document.querySelectorAll(".thumb");

        //     if (direction == 'forward') {
        //         if (this.slideIndex < this.slides.length - 1) {
        //             thumbs[this.slideIndex].classList.remove("active");
        //             this.slideIndex++;
        //             thumbs[this.slideIndex].classList.add("active");
        //         }
        //         else if (this.slideIndex == this.slides.length - 1) {
        //             thumbs[this.slideIndex].classList.remove("active");
        //             this.slideIndex = 0;
        //             thumbs[this.slideIndex].classList.add("active");
        //         }
                
        //     }
        //     else if (direction == 'backward') {
        //         if (this.slideIndex > 0) {
        //             thumbs[this.slideIndex].classList.remove("active");
        //             this.slideIndex--;
        //             thumbs[this.slideIndex].classList.add("active");
        //         }
        //         else if (this.slideIndex == 0) {
        //             thumbs[this.slideIndex].classList.remove("active");
        //             this.slideIndex = this.slides.length - 1;
        //             thumbs[this.slideIndex].classList.add("active");
        //         }
        //     }
        // },
        // versione 2
        controls: function(direction) {
            const thumbs = document.querySelectorAll(".thumb");

            if (direction == 'forward') {
                if (this.slideIndex < this.slides.length - 1) {
                    this.slideIndex++;
                }
                else if (this.slideIndex == this.slides.length - 1) {
                    this.slideIndex = 0;
                }
                
            }
            else if (direction == 'backward') {
                if (this.slideIndex > 0) {
                    this.slideIndex--;
                }
                else if (this.slideIndex == 0) {
                    this.slideIndex = this.slides.length - 1;
                }
            }
        },
        thumbSelection: function () {
            this.slides[this.slideIndex] == this.thumbs[this.slideIndex];
        }
    } 
}).mount('#app');