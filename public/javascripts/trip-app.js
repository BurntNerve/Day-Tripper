handleYelpSearch = () => {
  const searchTerms = {
    term: prompt('What do you want to search for?'),
    location: prompt('Where do you want to go?'),
    limit: 20
  };
  $.post('/data', searchTerms, data => {
    console.log(data);
  });
};

handleBeginClick = () => {
  $('.get-started-js').click(() => {
    $('html, body').animate(
      {
        scrollTop: $('.excursion-area').offset().top
      },
      2000
    );
  });
};

$(() => {
  handleYelpSearch();
  handleBeginClick();
});
