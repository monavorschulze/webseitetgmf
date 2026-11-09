import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.720678496162!2d7.911351600000003!3d51.555020700000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b96f886f6a10ff%3A0xccba65583747d27b!2sSiederstra%C3%9Fe%2C%2059457%20Werl!5e0!3m2!1sde!2sde!4v1650623853953!5m2!1sde!2sde"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
