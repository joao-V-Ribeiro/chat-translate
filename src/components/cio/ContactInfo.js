import React, { useState, useEffect } from 'react';

function ContactInfo() {
  const clearContactInfos = () => {
    // $('#contactinfosclear').hide();
    // $('#phoneNumber').text('');
    // $('#queueName').text('');
    // $('#contactID').text('');
    // $('#contactidcopy').hide();
    // $('#table')
    // const $table = $('#infotable');
    // a = $table.find('tbody')
    // a.remove()
    // $('#noinfo').show()
  };

  const copyContactID = (elementid, buttonid) => {
    var texttocopy = document.getElementById(elementid).innerHTML;

    navigator.clipboard.writeText(texttocopy);

    const buttonElement = document.getElementById(buttonid);
    buttonElement.classList.remove('fa-solid', 'fa-copy');
    buttonElement.classList.add('fa-solid', 'fa-check');

    setTimeout(() => {
      buttonElement.classList.remove('fa-solid', 'fa-check');
      buttonElement.classList.add('fa-solid', 'fa-copy');
    }, 2000);
  };

  const [isHidden, setIsHidden] = useState(true);
  const [buttonText, setButtonText] = useState('Show More');

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  useEffect(() => {
    if (isHidden) {
      setButtonText('Show More');
    } else {
      setButtonText('Collapse');
    }
  }, [isHidden]);

  return (
    <div id="firstRowsecond">
      <div id="contactinfostop">
        <div id="contactinfostitle">Contact Info</div>
        <span id="contactinfosclear" style={{ display: 'none' }} onClick={clearContactInfos}>
          Clear
        </span>
      </div>

      <ul id="contactinfos">
        <li>
          Phone: <span id="phoneNumber"></span>
        </li>
        <li>
          Queue: <span id="queueName"></span>
        </li>
        <li>Status: <span id="contactStatus"></span></li>
        <li>
          Contact ID: <span id="contactID"></span>
          <i className="fa-solid fa-copy" onClick={() => copyContactID("contactID", "contactidcopy")} id="contactidcopy"></i>
        </li>
      </ul>

      <div id="showmorecontactinfobuttondiv">
        <span id="showmorecontactinfobutton" onClick={toggleVisibility}>{buttonText}</span>
        <span id="copyinfo" style={{ display: 'none' }}>Click on a value to copy it</span>
      </div>

      <div id="showmorecontactinfo" style={{ display: isHidden ? 'none' : 'block' }}>
        <span id="noinfo">No info to show</span>
        <table id="infotable"></table>
      </div>
    </div>
  );
}

export default ContactInfo;
