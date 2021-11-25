import React from 'react';


const Footer = () => {
    const contacts = [
        {
            name: "GitHub",
            link: "https://github.com/Topash15",
            alt: "github",
            source: 'GitHub-Mark-Light-64px'
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/alexander-topash-667942168/",
            alt: "linkedin",
            source: 'In-White-34@2x'
        },
        {
            name: "stackoverflow",
            link: "https://stackoverflow.com/users/16146092/topash",
            alt: "stackoverflow",
            source: 'stackoverflow'
        },
    ];


    return (
      <div className="container footer">
            <ul className="footer-list row">
              {contacts.map((contact) => (
                <li className="footer-item col-sm-4" key={contact}>
                  <a href = {contact.link}>
                    <img
                        alt={contact.alt}
                        className = "footer-img"
                        src= {require(`../../assets/footer/${contact.source}.png`).default}
                        ></img>
                  </a>
                </li>
              ))}
            </ul>
      </div>
    );
  };

export default Footer