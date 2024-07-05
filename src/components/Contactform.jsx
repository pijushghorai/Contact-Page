import React from "react";
import formstyle from "./Contactform.module.css";
import Button from "./Button/Button";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

function Contactform() {
  return (
    <section className={formstyle.formcontainer}>
      <div className={formstyle.leftcontainer}>
        <div className={formstyle.btncontainer}>
          <Button
            btnText="VIA SUPPORT CHAT"
            btnIcon={<BiSolidMessageDetail />}
          />
          <Button btnText="VIA CALL" btnIcon={<IoCall />} />
        </div>
        <Button
          isOutLinebtn={true}
          btnText="VIA EMAIL FORM"
          btnIcon={<HiOutlineMail />}
        />

        <form action="">
          <div className={formstyle.form_fildes}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={formstyle.form_fildes}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" />
          </div>
          <div className={formstyle.form_fildes}>
            <label htmlFor="text">TEXT</label>
            <textarea name="text" rows={8} id="text"></textarea>
          </div>
          <div className={formstyle.submit_btn}>
            <Button btnText="SUBMIT" />
          </div>
        </form>
      </div>

      <div className={formstyle.rightcontainer}>
        <img src="./src/assets/contact.svg" alt="" />
      </div>
    </section>
  );
}

export default Contactform;
