

const updateVolume = async (event) => {
  const depth=document.querySelector("#depth").value;
  const height=document.querySelector("#height").value;
  const width=document.querySelector("#width").value;
  const volume=parseInt(depth)*parseInt(height)*parseInt(width);
  
  document.querySelector('#result').innerHTML = "The volume of given values is "+volume
}

// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up





document.addEventListener('click', event => {
  if (event.target && event.target.id === 'volume') { updateVolume(event) }
})
