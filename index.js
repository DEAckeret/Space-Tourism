
// HAMBURGER MENU -------------------------------------------------

var hamburger = document.querySelector('.hamburger');
var isAnimating = false;

hamburger.addEventListener('click', function() {
  if (isAnimating) {
    return;
  }
  
  isAnimating = true;
  hamburger.classList.toggle('active');
  
  if (hamburger.classList.contains('active')) {
    var showNav = document.querySelector('.primary-navigation');
    showNav.classList.remove('quick-rightside-out');
    showNav.classList.add('quick-rightside-content');
    showNav.style.width = '66vw';
    showNav.style.opacity = '1';
    showNav.style.visibility = 'visible';
    
    
    isAnimating = false;
  } else {
    var hideNav = document.querySelector('.primary-navigation');
    hideNav.classList.remove('quick-rightside-content');
    hideNav.classList.add('quick-rightside-out');

    setTimeout(function() {
      hideNav.style.opacity = '0';
      hideNav.style.visibility = 'hidden';
      hideNav.style.width = '0';
      isAnimating = false;
    }, 1500);
  }
});






// DESTINATION MENU -----------------------------------------------

var destinationButtons = document.querySelectorAll('#destination-menu button');

destinationButtons.forEach(function(button) {
  button.onclick = function() {

    destinationButtons.forEach(function(btn) {
      btn.setAttribute('aria-selected', 'false');
    });

    this.setAttribute('aria-selected', 'true');

    if (this.id === 'destination-one') {
      console.log('destination-one is selected');

      // grabbing assets and all associated elements and assigning them to variables.
      var destinationName = document.getElementById('dest-name');
      var destinationDescription = document.getElementById('dest-description');
      var destinationDistance = document.getElementById('dest-distance');
      var destinationTravel = document.getElementById('dest-travel');
      var destinationSourceWebp = document.getElementsByClassName('dest-image')[0];
      var destinationSourcePng = document.getElementsByClassName('dest-image')[1];
      var destinationImage = document.getElementsByClassName('dest-image')[2];
      var destinationMenu = document.getElementById('destination-menu');

      destinationName.classList.remove('top-content');
      destinationDescription.classList.remove('rightside-content');
      destinationDistance.classList.remove('bottom-content');
      destinationTravel.classList.remove('bottom-content');
      destinationImage.classList.remove('leftside-content');
      destinationMenu.classList.remove('fade-in-content');

      async function fetchMoon() {
        const response = await fetch('./data.json');
        const data = await response.json();

        const moon = data.destinations[0];

        destinationName.innerHTML = moon.name;
        destinationDescription.innerHTML = moon.description;
        destinationDistance.innerHTML = moon.distance;
        destinationTravel.innerHTML = moon.travel;
        destinationSourceWebp.srcset = moon.images.webp;
        destinationSourcePng.srcset = moon.images.png;
        destinationImage.src = moon.images.png;

        destinationName.classList.add('top-content');
        destinationDescription.classList.add('rightside-content');
        destinationDistance.classList.add('bottom-content');
        destinationTravel.classList.add('bottom-content');
        destinationImage.classList.add('leftside-content');
        destinationMenu.classList.add('fade-in-content');
      }

      fetchMoon();


    } else if (this.id === 'destination-two') {

      // grabbing assets and all associated elements and assigning them to variables.
      var destinationName = document.getElementById('dest-name');
      var destinationDescription = document.getElementById('dest-description');
      var destinationDistance = document.getElementById('dest-distance');
      var destinationTravel = document.getElementById('dest-travel');
      var destinationSourceWebp = document.getElementsByClassName('dest-image')[0];
      var destinationSourcePng = document.getElementsByClassName('dest-image')[1];
      var destinationImage = document.getElementsByClassName('dest-image')[2];
      var destinationMenu = document.getElementById('destination-menu');

      destinationName.classList.remove('top-content');
      destinationDescription.classList.remove('rightside-content');
      destinationDistance.classList.remove('bottom-content');
      destinationTravel.classList.remove('bottom-content');
      destinationImage.classList.remove('leftside-content');
      destinationMenu.classList.remove('fade-in-content');

      async function fetchMars() {
        const response = await fetch('./data.json');
        const data = await response.json();

        const mars = data.destinations[1];

        destinationName.innerHTML = mars.name;
        destinationDescription.innerHTML = mars.description;
        destinationDistance.innerHTML = mars.distance;
        destinationTravel.innerHTML = mars.travel;
        destinationSourceWebp.srcset = mars.images.webp;
        destinationSourcePng.srcset = mars.images.png;
        destinationImage.src = mars.images.png;

        destinationName.classList.add('top-content');
        destinationDescription.classList.add('rightside-content');
        destinationDistance.classList.add('bottom-content');
        destinationTravel.classList.add('bottom-content');
        destinationImage.classList.add('leftside-content');
        destinationMenu.classList.add('fade-in-content');
      }

      fetchMars();

      console.log('destination-two is selected');
    } else if (this.id === 'destination-three') {
      console.log('destination-three is selected');

      // grabbing assets and all associated elements and assigning them to variables.
      var destinationName = document.getElementById('dest-name');
      var destinationDescription = document.getElementById('dest-description');
      var destinationDistance = document.getElementById('dest-distance');
      var destinationTravel = document.getElementById('dest-travel');
      var destinationSourceWebp = document.getElementsByClassName('dest-image')[0];
      var destinationSourcePng = document.getElementsByClassName('dest-image')[1];
      var destinationImage = document.getElementsByClassName('dest-image')[2];
      var destinationMenu = document.getElementById('destination-menu');

      destinationName.classList.remove('top-content');
      destinationDescription.classList.remove('rightside-content');
      destinationDistance.classList.remove('bottom-content');
      destinationTravel.classList.remove('bottom-content');
      destinationImage.classList.remove('leftside-content');
      destinationMenu.classList.remove('fade-in-content');

      async function fetchEuropa() {
        const response = await fetch('./data.json');
        const data = await response.json();

        const europa = data.destinations[2];

        destinationName.innerHTML = europa.name;
        destinationDescription.innerHTML = europa.description;
        destinationDistance.innerHTML = europa.distance;
        destinationTravel.innerHTML = europa.travel;
        destinationSourceWebp.srcset = europa.images.webp;
        destinationSourcePng.srcset = europa.images.png;
        destinationImage.src = europa.images.png;

        destinationName.classList.add('top-content');
        destinationDescription.classList.add('rightside-content');
        destinationDistance.classList.add('bottom-content');
        destinationTravel.classList.add('bottom-content');
        destinationImage.classList.add('leftside-content');
        destinationMenu.classList.add('fade-in-content');
      }

      fetchEuropa();


    } else if (this.id === 'destination-four') {
      console.log('destination-four is selected');

      // grabbing assets and all associated elements and assigning them to variables.
      var destinationName = document.getElementById('dest-name');
      var destinationDescription = document.getElementById('dest-description');
      var destinationDistance = document.getElementById('dest-distance');
      var destinationTravel = document.getElementById('dest-travel');
      var destinationSourceWebp = document.getElementsByClassName('dest-image')[0];
      var destinationSourcePng = document.getElementsByClassName('dest-image')[1];
      var destinationImage = document.getElementsByClassName('dest-image')[2];
      var destinationMenu = document.getElementById('destination-menu');

      destinationName.classList.remove('top-content');
      destinationDescription.classList.remove('rightside-content');
      destinationDistance.classList.remove('bottom-content');
      destinationTravel.classList.remove('bottom-content');
      destinationImage.classList.remove('leftside-content');
      destinationMenu.classList.remove('fade-in-content');

      async function fetchTitan() {
        const response = await fetch('./data.json');
        const data = await response.json();

        const titan = data.destinations[3];

        destinationName.innerHTML = titan.name;
        destinationDescription.innerHTML = titan.description;
        destinationDistance.innerHTML = titan.distance;
        destinationTravel.innerHTML = titan.travel;
        destinationSourceWebp.srcset = titan.images.webp;
        destinationSourcePng.srcset = titan.images.png;
        destinationImage.src = titan.images.png;

        destinationName.classList.add('top-content');
        destinationDescription.classList.add('rightside-content');
        destinationDistance.classList.add('bottom-content');
        destinationTravel.classList.add('bottom-content');
        destinationImage.classList.add('leftside-content');
        destinationMenu.classList.add('fade-in-content');
      }

      fetchTitan();
    }
  };
});

// CREW MEMBER MENU -----------------------------------------------

var crewButtons = document.querySelectorAll('#crew-menu button');

crewButtons.forEach(function(button) {
  button.onclick = function() {

    crewButtons.forEach(function(btn) {
      btn.setAttribute('aria-selected', 'false');
    });

    this.setAttribute('aria-selected', 'true');

    // CREW MEMBER ONE -----------------------------------------------

    if (this.id === 'crew-member-one') {
      console.log('crew-one is selected');

        // grabbing assets and all elements with class name crew-image and assigning them to variables.
        var crewOnePng = './assets/crew/image-douglas-hurley.png'
        var crewOneWebp = './assets/crew/image-doulas-hurley.webp'
        var sourcePng = document.getElementsByClassName('crew-image')[0];
        var sourceWebp = document.getElementsByClassName('crew-image')[1];
        var imagePng = document.getElementsByClassName('crew-image')[2];
        // grabbing elements for associated text with crew member.
        var crewTitle = document.getElementById('crew-role');
        var crewName = document.getElementById('crew-name');
        var crewBio = document.getElementById('crew-bio');

            crewTitle.classList.remove('top-content');
            crewName.classList.remove('leftside-content');
            crewBio.classList.remove('bottom-content');

        async function fetchDouglas() {
            const response = await fetch('./data.json');
            const data = await response.json();

            const douglas = data.crew[0];

            crewTitle.innerHTML = douglas.role;
            crewName.innerHTML = douglas.name;
            crewBio.innerHTML = douglas.bio;

            // DONT FORGET TO ADD BREAKS -- i really want to figure out how to do this without adding breaks to json file or writing out p here.

            crewTitle.classList.add('top-content');
            crewName.classList.add('leftside-content');
            crewBio.classList.add('bottom-content');
        }

        fetchDouglas();
        

        
        // adding fade-in-content class to all elements with class name crew-image.
        var crewImages = document.getElementsByClassName('crew-image');

        for (var i = 0; i < crewImages.length; i++) {
            crewImages[i].classList.add('fade-in-content'); 
          }

        // assigning png and webp assets to appropriate source elements.
        sourcePng.srcset = crewOnePng;
        sourceWebp.srcset = crewOneWebp;
        imagePng.src = crewOnePng;

        // removing fade-in-content class from all elements with class name crew-image.
        setTimeout(function() {
            for (var i = 0; i < crewImages.length; i++) {
                crewImages[i].classList.remove('fade-in-content'); 
              }
        }, 1501);

        // CREW MEMBER TWO -----------------------------------------------

    } else if (this.id === 'crew-member-two') {
      console.log('crew-two is selected');
      var crewTwoPng = './assets/crew/image-mark-shuttleworth.png'
      var crewTwoWebp = './assets/crew/image-mark-shuttleworth.webp'
      var sourcePng = document.getElementsByClassName('crew-image')[0];
      var sourceWebp = document.getElementsByClassName('crew-image')[1];
      var imagePng = document.getElementsByClassName('crew-image')[2];

      // grabbing elements for associated text with crew member.
      var crewTitle = document.getElementById('crew-role');
      var crewName = document.getElementById('crew-name');
      var crewBio = document.getElementById('crew-bio');

          crewTitle.classList.remove('top-content');
          crewName.classList.remove('leftside-content');
          crewBio.classList.remove('bottom-content');

      async function fetchMark() {
          const response = await fetch('./data.json');
          const data = await response.json();

          const mark = data.crew[1];

          crewTitle.innerHTML = mark.role;
          crewName.innerHTML = mark.name;
          crewBio.innerHTML = mark.bio;

          crewTitle.classList.add('top-content');
          crewName.classList.add('leftside-content');
          crewBio.classList.add('bottom-content');
      }

      fetchMark();

      var crewImages = document.getElementsByClassName('crew-image');

        for (var i = 0; i < crewImages.length; i++) {
            crewImages[i].classList.add('quick-fade-in-content'); 
          }

      sourcePng.srcset = crewTwoPng;
      sourceWebp.srcset = crewTwoWebp;
      imagePng.src = crewTwoPng;

      setTimeout(function() {
        for (var i = 0; i < crewImages.length; i++) {
            crewImages[i].classList.remove('quick-fade-in-content'); 
          }
    }, 1501);

    // CREW MEMBER THREE -----------------------------------------------

    } else if (this.id === 'crew-member-three') {

      console.log('crew-three is selected');

      var crewThreePng = './assets/crew/image-victor-glover.png'
      var crewThreeWebp = './assets/crew/image-victor-glover.webp'
      var sourcePng = document.getElementsByClassName('crew-image')[0];
      var sourceWebp = document.getElementsByClassName('crew-image')[1];
      var imagePng = document.getElementsByClassName('crew-image')[2];

      // grabbing elements for associated text with crew member.
      var crewTitle = document.getElementById('crew-role');
      var crewName = document.getElementById('crew-name');
      var crewBio = document.getElementById('crew-bio');

          crewTitle.classList.remove('top-content');
          crewName.classList.remove('leftside-content');
          crewBio.classList.remove('bottom-content');

      async function fetchVictor() {
          const response = await fetch('./data.json');
          const data = await response.json();

          const victor = data.crew[2];

          crewTitle.innerHTML = victor.role;
          crewName.innerHTML = victor.name;
          crewBio.innerHTML = victor.bio;

          crewTitle.classList.add('top-content');
          crewName.classList.add('leftside-content');
          crewBio.classList.add('bottom-content');
      }

      fetchVictor();

      var crewImages = document.getElementsByClassName('crew-image');

        for (var i = 0; i < crewImages.length; i++) {
            crewImages[i].classList.add('quick-fade-in-content'); 
          }

      sourcePng.srcset = crewThreePng;
      sourceWebp.srcset = crewThreeWebp;
      imagePng.src = crewThreePng;

      setTimeout(function() {
        for (var i = 0; i < crewImages.length; i++) {
            crewImages[i].classList.remove('quick-fade-in-content'); 
          }
    }, 1501);

    // CREW MEMBER FOUR -----------------------------------------------

    } else if (this.id === 'crew-member-four') {
      console.log('crew-four is selected');

      var crewFourPng = './assets/crew/image-anousheh-ansari.png'
      var crewFourWebp = './assets/crew/image-anousheh-ansari.webp'
      var sourcePng = document.getElementsByClassName('crew-image')[0];
      var sourceWebp = document.getElementsByClassName('crew-image')[1];
      var imagePng = document.getElementsByClassName('crew-image')[2];

      // grabbing elements for associated text with crew member.
      var crewTitle = document.getElementById('crew-role');
      var crewName = document.getElementById('crew-name');
      var crewBio = document.getElementById('crew-bio');

          crewTitle.classList.remove('top-content');
          crewName.classList.remove('leftside-content');
          crewBio.classList.remove('bottom-content');

      async function fetchAnousheh() {
          const response = await fetch('./data.json');
          const data = await response.json();

          const anousheh = data.crew[3];

          crewTitle.innerHTML = anousheh.role;
          crewName.innerHTML = anousheh.name;
          crewBio.innerHTML = anousheh.bio;

          crewTitle.classList.add('top-content');
          crewName.classList.add('leftside-content');
          crewBio.classList.add('bottom-content');
      }

      fetchAnousheh();

      var crewImages = document.getElementsByClassName('crew-image');

        for (var i = 0; i < crewImages.length; i++) {
            crewImages[i].classList.add('quick-fade-in-content'); 
          }

      sourcePng.srcset = crewFourPng;
      sourceWebp.srcset = crewFourWebp;
      imagePng.src = crewFourPng;

      setTimeout(function() {
        for (var i = 0; i < crewImages.length; i++) {
            crewImages[i].classList.remove('quick-fade-in-content'); // replace 'new-class' with the name of the class you want to add
          }
    }, 1501);
    }
  };
});

// TECHNOLOGY MENU -----------------------------------------------

var techButtons = document.querySelectorAll('#technology-menu button');

techButtons.forEach(function(button) {
  button.onclick = function() {

    techButtons.forEach(function(btn) {
      btn.setAttribute('aria-selected', 'false');
    });

    this.setAttribute('aria-selected', 'true');

    if (this.id === 'tech-one') {
      console.log('tech-one is selected');

      // grabbing assets and all associated elements and assigning them to variables.
      techName = document.getElementById('tech-name');
      techDescription = document.getElementById('tech-description');
      techSourceLandscape = document.getElementsByClassName('tech-image')[0];
      techSourcePng = document.getElementsByClassName('tech-image')[1];
      techImage = document.getElementsByClassName('tech-image')[2];

      techName.classList.remove('fade-in-content');
      techDescription.classList.remove('fade-in-content');
      techImage.classList.remove('fade-in-content');

      async function fetchLaunchVehicle() {

        const response = await fetch('./data.json');
        const data = await response.json();

        const launchVehicle = data.technology[0];

        techName.innerHTML = launchVehicle.name;
        techDescription.innerHTML = launchVehicle.description;
        techSourcePortrait.srcset = launchVehicle.images.portrait;
        techSourceLandscape.srcset = launchVehicle.images.landscape;
        techImage.src = launchVehicle.images.portrait;
        

        techName.classList.add('fade-in-content');
        techDescription.classList.add('fade-in-content');
        techImage.classList.add('fade-in-content');
      }

      fetchLaunchVehicle();

    } else if (this.id === 'tech-two') {
      console.log('tech-two is selected');

      // grabbing assets and all associated elements and assigning them to variables.
      techName = document.getElementById('tech-name');
      techDescription = document.getElementById('tech-description');
      techSourceLandscape = document.getElementsByClassName('tech-image')[0];
      techSourcePortrait = document.getElementsByClassName('tech-image')[1];
      techImage = document.getElementsByClassName('tech-image')[2];

      techName.classList.remove('fade-in-content');
      techDescription.classList.remove('fade-in-content');
      techImage.classList.remove('fade-in-content');

      async function fetchSpaceport() {

        const response = await fetch('./data.json');
        const data = await response.json();

        const spaceport = data.technology[1];

        techName.innerHTML = spaceport.name;
        techDescription.innerHTML = spaceport.description;
        techSourcePortrait.srcset = spaceport.images.portrait;
        techSourceLandscape.srcset = spaceport.images.landscape;
        techImage.src = spaceport.images.portrait;

        techName.classList.add('fade-in-content');
        techDescription.classList.add('fade-in-content');
        techImage.classList.add('fade-in-content');
      }

      fetchSpaceport();

    } else if (this.id === 'tech-three') {
      console.log('tech-three is selected');

      // grabbing assets and all associated elements and assigning them to variables.
      techName = document.getElementById('tech-name');
      techDescription = document.getElementById('tech-description');
      techSourceLandscape = document.getElementsByClassName('tech-image')[0];
      techSourcePortrait = document.getElementsByClassName('tech-image')[1];
      techImage = document.getElementsByClassName('tech-image')[2];

      techName.classList.remove('fade-in-content');
      techDescription.classList.remove('fade-in-content');
      techImage.classList.remove('fade-in-content');

      async function fetchSpaceCapsule() {

        const response = await fetch('./data.json');
        const data = await response.json();

        const spaceCapsule = data.technology[2];

        techName.innerHTML = spaceCapsule.name;
        techDescription.innerHTML = spaceCapsule.description;
        techSourcePortrait.srcset = spaceCapsule.images.portrait;
        techSourceLandscape.srcset = spaceCapsule.images.landscape;
        techImage.src = spaceCapsule.images.portrait;

        techName.classList.add('fade-in-content');
        techDescription.classList.add('fade-in-content');
        techImage.classList.add('fade-in-content');
      }

      fetchSpaceCapsule();

    }
  };
});