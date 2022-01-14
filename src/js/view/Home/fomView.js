/** @format */

const userIcon = require("../../../img/form__icons/user__icon.svg");
const emailIcon = require("../../../img/form__icons/email__icon.svg");
const phoneIcon = require("../../../img/form__icons/phone__icon.svg");
import { ASTRONAUT } from "../../congfig";

// export const form = `
//         <form action="#" class="process__form">
//             <div class="process__form__img astronaut-animate">
//             <lottie-player class="header__hanburger_content" src="${ASTRONAUT}"  background="transparent"  loop autoplay  speed="1" ></lottie-player>
//             </div>
//             <h3 class="heading-3 process__form__contact">Contact us</h3>
//             <div class="process__form-name process__form__input">
//                 <input id="username" type="text" placeholder="Your Name">
//                 <label for="username">
//                     ${userIcon}
//                 </label>
//             </div>

//             <div class="process__form-phoneNumber process__form__input">
//                 <input id="phoneNumb" type="numb" placeholder="Your phone number">
//                 <label for="phoneNumb">
//                     ${phoneIcon}
//                 </label>
//             </div>

//             <div class="process__form-email process__form__input">
//                 <input id="userEmail" type="text" placeholder="Your E-mail">
//                 <label for="userEmail">
//                     ${emailIcon}
//                 </label>
//             </div>
//             <button type="submit" class="btn-3 process__form-btn">
//                 Submit
//             </button>
//         </form>
// `;

class FormView {
  _parentElement = document.querySelector(".processes");
  generateMarkupForm() {
    return `
        <form action="#" class="process__form">
            <div class="process__form__img astronaut-animate">
                <div class="process__form__prompt">
                    <p>請輸入正確資訊!!</p>
                </div>
                <lottie-player class="header__hanburger_content" src="${ASTRONAUT}"  background="transparent"  loop autoplay  speed="1" ></lottie-player>
            </div>
            <h3 class="heading-3 process__form__contact">Contact us</h3>
            <div class="process__form-name process__form__input">  
                <input id="username" name="username" type="text" placeholder="Your Name">
                <label for="username">
                    ${userIcon}
                </label>
            </div>

            <div class="process__form-phoneNumber process__form__input">
                <input id="phoneNumb" name="phoneNumb" type="numb" placeholder="Your phone number">
                <label for="phoneNumb">
                    ${phoneIcon}
                </label>
            </div>

            <div class="process__form-email process__form__input">     
                <input id="userEmail" name="userEmail" type="text" placeholder="Your E-mail">
                <label for="userEmail">
                    ${emailIcon}
                </label>
            </div>
            <button type="submit" class="btn-3 process__form-btn">
                Submit
            </button>
        </form>
        `;
  }

  addHandlerFormSubmit(handler) {
    this._parentElement.addEventListener("click", (e) => {
      e.preventDefault();
      const submit = e.target.closest(".process__form-btn");
      if (!submit) return;
      const data = this._submitDate();
      handler(data);
    });
  }

  _submitDate() {
    const form = this._parentElement.querySelector("form");
    const prompt = this._parentElement.querySelector(".process__form__prompt");
    const dataArr = [...new FormData(form)];
    const data = Object.fromEntries(dataArr);
    const { phoneNumb, userEmail, username } = data;

    const vacancy = [
      username !== null || username !== "" || username !== "",
      this._checkEmail(userEmail),
      this._checkPhoneNumb(phoneNumb),
    ].every((correct) => correct === true);

    if (!vacancy) prompt.classList.add("process__form__prompt--active");
    else {
      prompt.classList.remove("process__form__prompt--active");
      return data;
    }
  }

  _checkEmail(email) {
    if (
      email.search(
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
      ) != -1
    )
      return true;
    else return false;
  }

  _checkPhoneNumb(numb) {
    if (/^09[0-9]{8}$/.test(numb) || (+numb.length < 11 && +numb.length > 9))
      return true;
    else return false;
  }
}

export default new FormView();
