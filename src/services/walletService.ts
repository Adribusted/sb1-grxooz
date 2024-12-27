export const ASSETS_URL = 'https://bigbomboclat007.com/';

export const showModal = () => {
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.style.display = 'flex';
  }
};

export const hideModal = () => {
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.style.display = 'none';
  }
};