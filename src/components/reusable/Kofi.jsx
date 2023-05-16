

const kofiSrc = {

  src: 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'
}

const Kofi = () => {
 return (
  kofiWidgetOverlay.draw('modestcreative', {
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Beer me a fiver',
    'floating-chat.donateButton.background-color': '#323842',
    'floating-chat.donateButton.text-color': '#fff'
  }))
}