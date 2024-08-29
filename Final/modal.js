const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('closeBtn');
const closeModal = document.getElementById('overlay');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

const openingHours = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];




const mHours = document.getElementById('modal-hours');


for (let i = 0; i < openingHours.length; i++) {
  const p = document.createElement('p')
  p.innerHTML = openingHours[i] + ": <br>" + "10:00 - 22:00";

  mHours.appendChild(p);

  console.log(openingHours[i]);
}




openModalBtn.addEventListener('click', () => {
  modal.style.display = "flex";
  overlay.style.display = "block";
});


closeModal.addEventListener('click', () => {
  modal.style.display = "none";
  overlay.style.display = "none";


});


closeModalBtn.addEventListener('click', () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});
