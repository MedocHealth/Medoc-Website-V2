import React, { useEffect } from 'react';

const Calendar = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/medochealth/bookdemo?text_color=2A4755&primary_color=41c1ba"
      style={{ minWidth: '320px', height: '700px' }}
    ></div>
  );
};

export default Calendar;
