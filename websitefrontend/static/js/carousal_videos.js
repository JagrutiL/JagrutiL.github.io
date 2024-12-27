const videoSources = [
    "../static/img/WhatsApp Video 2024-12-27 at 10.44.48 AM.mp4",
    "../static/img/0000-0375 (1).mp4",
    "../static/img/cleanroom (1).mp4"
  ];
  const mainVideo = document.getElementById("mainVideo");
  let currentVideoIndex = 0;
  let videoBlobs = [];

  // Preload videos as Blob URLs to avoid network reloads
  function preloadVideos(sources) {
    return Promise.all(
      sources.map(src =>
        fetch(src)
          .then(response => response.blob())
          .then(blob => URL.createObjectURL(blob))
      )
    );
  }

  // Initialize video playback
  preloadVideos(videoSources).then(blobs => {
    videoBlobs = blobs;
    mainVideo.src = videoBlobs[currentVideoIndex];
    mainVideo.play();
    updateActiveButton(currentVideoIndex); // Set the initial active button
  });

  // Function to change video without reloading from network
  function changeVideo(index) {
    if (index === currentVideoIndex || !videoBlobs[index]) return;

    // Update current index and set video source to preloaded Blob URL
    currentVideoIndex = index;
    mainVideo.src = videoBlobs[currentVideoIndex];
    mainVideo.currentTime = 0;
    mainVideo.play();
    updateActiveButton(currentVideoIndex); // Update the active button
  }

  // Play next video when the current one ends
  mainVideo.addEventListener("ended", () => {
    changeVideo((currentVideoIndex + 1) % videoBlobs.length);
  });

  // Setup button clicks to play specific videos
  document.querySelectorAll('.video-button').forEach(button => {
    button.addEventListener('click', () => {
      const index = parseInt(button.getAttribute('data-index'), 10);
      changeVideo(index);
    });
  });

  // Function to update active button color for both sets of buttons
  function updateActiveButton(index) {
    // Update main buttons
    document.querySelectorAll('.landingpage_video_child_div .video-button').forEach(button => {
      button.classList.remove('active-button');
    });
    document.querySelector(`.landingpage_video_child_div .video-button[data-index="${index}"]`).classList.add('active-button');

    // Update small dot buttons
    document.querySelectorAll('.carousal_option2_video .video-button').forEach(button => {
      button.classList.remove('active-button');
    });
    document.querySelector(`.carousal_option2_video .video-button[data-index="${index}"]`).classList.add('active-button');
  }