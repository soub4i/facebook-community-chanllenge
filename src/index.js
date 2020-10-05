import '@soubai/web-merge'

const react = document.querySelector('#react').shadowRoot.querySelector("iframe");
react.onload = () => {
    react.contentWindow.postMessage([], '*');
}