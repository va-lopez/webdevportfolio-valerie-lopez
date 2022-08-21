
import React from 'react';
import resume from '../../assets/PearsonResume-ValerieLopez.pdf'

function Resume() {
  return (
    <section id="about" className="p-3" style={{height:"600px" , maxWidth:"90%", margin:"0 auto"}}>
        <object data={resume} type="application/pdf" width="100%" height="100%">
          <p>Alternative text - include a link <a href={resume}>to the PDF!</a></p>
        </object>
    </section>
  );
}

export default Resume;