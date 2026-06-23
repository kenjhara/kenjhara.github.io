
const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach((collapsible) => {
  const trigger = collapsible.querySelector('.collapsible-trigger');
  const content = collapsible.querySelector('.content');
  const arrowIcon = trigger.querySelector('.arrow-icon');

  trigger.addEventListener('click', () => {
    if (content.classList.contains('show')) {
      content.style.maxHeight = content.scrollHeight + 'px';
      setTimeout(() => {
        content.style.maxHeight = '0';
      }, 0);

      arrowIcon.style.transform = 'rotate(0deg)';
      content.classList.remove('show');
    } else {      
      content.classList.add('show');

      content.style.maxHeight = '0';

      setTimeout(() => {
        content.style.maxHeight = content.scrollHeight + 'px';
      }, 0);

      arrowIcon.style.transform = 'rotate(180deg)';
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
    const emailContainer = document.getElementById('liam-container');

    const encodedUser = "a2VuamhhcmE="; 
    const encodedDomain = "ZWFzdC5uY2MuZ28uanA="; 
    const user = atob(encodedUser);
    const domain = atob(encodedDomain);
    const address = `${user}@${domain}`;

    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${address}`;
    emailLink.textContent = "";

    const activateLink = () => {
        if (!emailContainer.querySelector('a')) {
            emailContainer.innerHTML = ""; 
            emailLink.innerHTML = `<img src="icons/icon-liam.png" width="30" height="30"/>`;
            emailContainer.appendChild(emailLink);
        }
    };

    emailContainer.addEventListener('mouseenter', activateLink, { once: true });
});



