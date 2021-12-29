/** @format */

import View from "../veiw";

const astronaut = require("../../../img/form__icons/astronaut.svg");
const userIcon = require("../../../img/form__icons/user__icon.svg");
const emailIcon = require("../../../img/form__icons/email__icon.svg");
const phoneIcon = require("../../../img/form__icons/phone__icon.svg");

export const form = `
        <form action="#" class="process__form">
            <div class="process__form__img astronaut-animate">
            ${astronaut}
            </div>
            <h3 class="heading-3 process__form__contact">Contact us</h3>
            <div class="process__form-name process__form__input">  
                <input id="username" type="text" placeholder="Your Name">
                <label for="username">
                    ${userIcon}
                </label>
            </div>

            <div class="process__form-phoneNumber process__form__input">
                <input id="phoneNumb" type="numb" placeholder="Your phone number">
                <label for="phoneNumb">
                    ${phoneIcon}
                </label>
            </div>

            <div class="process__form-email process__form__input">     
                <input id="userEmail" type="text" placeholder="Your E-mail">
                <label for="userEmail">
                    ${emailIcon}
                </label>
            </div>
            <button type="submit" class="btn-3 process__form-btn">
                Submit
            </button>
        </form>
`;

class FormView extends View {
  _parentElement = document.querySelector(".process");

  _generateMarkup() {
    return `
        <form action="#" class="process__form">
            <div class="process__form__img astronaut-animate">
            ${astronaut}
            </div>
            <h3 class="heading-3 process__form__contact">Contact us</h3>
            <div class="process__form-name process__form__input">  
                <input id="username" type="text" placeholder="Your Name">
                <label for="username">
                    ${userIcon}
                </label>
            </div>

            <div class="process__form-phoneNumber process__form__input">
                <input id="phoneNumb" type="numb" placeholder="Your phone number">
                <label for="phoneNumb">
                    ${phoneIcon}
                </label>
            </div>

            <div class="process__form-email process__form__input">     
                <input id="userEmail" type="text" placeholder="Your E-mail">
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
}

export default new FormView();
