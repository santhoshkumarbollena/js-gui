

const updateLength = async (event) => {
  const str=document.querySelector("#word").value;
  const length=str.length;
  
  
  document.querySelector('#result').innerHTML = "The length of given string is "+length
}

// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up





document.addEventListener('click', event => {
  if (event.target && event.target.id === 'lengthTester') { updateLength(event) }
})
