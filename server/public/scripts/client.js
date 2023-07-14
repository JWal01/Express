console.log('script sourced.');

//function handleClick(event , text) {
  //console.log('I was clicked');
  //let modeSelected = document.querySelector('.mode-button').value;
  //modeSelected.innerHTML += `<h2> ${modeSelected} </h2>`;
  //console.log(modeSelected);
//}

function handleClick(event) {
  console.log('I was clicked');
  let modeSelected = event.target.textContent;
  console.log(modeSelected);
  let selectedMode = document.querySelector('#selected-mode');
  console.log(selectedMode);
  console.log(event);

  selectedMode.innerHTML = modeSelected;
}

function writeSong(event) {
  let noteSelected = event.target.innerText;
  console.log(noteSelected);
  let addedNote = document.querySelector('#note-container');
  console.log(addedNote);

  let element = document.getElementById("note-container");

  element.innerHTML += `
  <h2>${noteSelected}</h2>`;

}


