function openDiary() {
  document.getElementById('diaryModal').style.display = 'block';
  showPage(2); // Open from photo page, after front cover
}
function closeDiary() {
  document.getElementById('diaryModal').style.display = 'none';
}
function showPage(num) {
  for (let i = 2; i <= 5; i++) {
    document.getElementById('page' + i).style.display = i === num ? 'block' : 'none';
  }
}
function nextPage(num) {
  showPage(num);
}
function prevPage(num) {
  showPage(num);
}
window.onclick = function (event) {
  const modal = document.getElementById('diaryModal');
  if (event.target === modal) {
    closeDiary();
  }
};
// Image preview helper
function previewPhoto(inputId, imgId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(imgId);
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
  }
}
