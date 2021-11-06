import React from 'react';


const Footer = () => {
    const contacts = [
        {
            link: "https://github.com/Topash15",
            alt: "github",
            source: 'GitHub32'
        },
        {
            link: "https://www.linkedin.com/in/alexander-topash-667942168/",
            alt: "linkedin",
            source: 'LinkedIn-Blue-14@2x'
        },
        {
            link: "https://www.linkedin.com/in/alexander-topash-667942168/",
            alt: "linkedin",
            source: 'LinkedIn-Blue-14@2x'
        },
    ];


    return (
      <div className="container">
        <div className="row">
          <div className="col-7">
            <ul className="">
              {contacts.map((contact) => (
                <li className="" key={contact}>
                  <a href = {contact.link}>
                    <img
                        alt={contact.alt}
                        className = {contact.source}
                        src= {require(`../../assets/footer/${contact.source}.png`).default}
                        ></img>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

export default Footer