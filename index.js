document.addEventListener('DOMContentLoaded', () => {
  let dark = false;
  setInterval(() => {
 //   document.body.style = dark
   //   ? 'background-color:#f09b95'
  //    : Math.random() > 0.4
 //     ? 'background-color:#f7584d'
 //     : 'background-color:#d9a29e';
 //   dark = !dark;
    document.querySelector('h1').style = dark
      ? Math.random() > 0.8
        ? 'color: #296fa3'
        : 'color:#6db6ed'
      : 'color: #5fb8fa';
    document.title = dark
      ? Math.random() > 0.5
        ? '<3'
        : '2024'
      : Math.random() < 0.6
      ? 'recap'
      : 'Uni';
  }, 1000);
});
