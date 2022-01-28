const elements = {
  h1: document.querySelector('h1'),
  titleInput: document.querySelector('#title'), 
  textInput: document.querySelector('#text'), 
  urlInput: document.querySelector('#url'), 
  shareBtn: document.querySelector('#btn') 
}


const onShare = async() => {
  const title = elements.titleInput.value;
  const text = elements.textInput.value;
  const url = elements.urlInput.value;

   try {
     if(navigator.share){
       await navigator.share({
         title, text, url
       });

       console.log("Successful!", {title, text, url})
     }
   } catch (err) {
     console.error("Unsuccessful!!", err); 
   }
}

elements.shareBtn.addEventListener('click', onShare);

// element.shareBtn.addEventListener('click', () => {
//   const parsedUrl = new URL(window.location);
//   // searchParams.get() will properly handle decoding the values.
//   console.log('Title shared: ' + parsedUrl.searchParams.get('title'));
//   console.log('Text shared: ' + parsedUrl.searchParams.get('text'));
//   console.log('URL shared: ' + parsedUrl.searchParams.get('url'));
// });
//
// document.querySelector('#share').addEventListener('click', () => {
//   if (navigator.share) {
//     navigator.share({
//       title: 'This is subject',
//       text: 'This is the body',
//       url: 'https://dev.localhost/',
//     })
//       .then(() => console.log('Successful share'))
//       .catch((error) => console.log('Error sharing', error));
//   }
// })