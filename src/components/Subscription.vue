<template>
  <p style="font-weight: 700; font-size: 22px">Join our journey!</p>
  <p>
    Subscribe for the latest updates and insights on <b>What's Next</b> and all
    things <b>psquared</b>. Be the first to know about our new features and
    developments.
  </p>
  <client-only>
    <div id="mc_embed_signup">
      <form
        action="https://dev.us21.list-manage.com/subscribe/post?u=4ebca535469760da3df7fc52d&id=3ccaa29823&f_id=00a9fae6f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <div class="indicates-required"></div>

          <!-- Checkbox and Nuxt links for terms and privacy policy -->
          <!-- Checkbox and Nuxt links for terms and privacy policy -->
          <div class="mc-field-group checkbox-container">
            <label for="mce-AGREE" class="terms-label" style="text-align: left">
              <span class="checkbox-custom">
                <font-awesome-icon
                  :icon="checked ? 'square-check' : 'square'"
                  @click="checked = !checked"
                  class="checkbox-icon"
                  :class="{ checked: checked }"
                />
              </span>
              <span class="terms-text">
                I agree with the
                <nuxt-link
                  to="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                >
                  terms and conditions
                </nuxt-link>
                and I recognize the
                <nuxt-link
                  to="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                >
                  privacy policy </nuxt-link
                >.
              </span>
            </label>
          </div>

          <div class="mc-field-group" style="">
            <label style="text-align: left" for="mce-EMAIL"
              >Email Address</label
            >
            <input
              class="email"
              type="email"
              v-model="email"
              name="EMAIL"
              id="mce-EMAIL"
              required
            />
          </div>
          <div class="optionalParent">
            <div class="clear foot">
              <input
                type="submit"
                value="submit"
                name="submit"
                id="mc-embedded-subscribe"
                class="button"
                :class="{ 'button-disabled': !isFormValid }"
                :disabled="!isFormValid"
              />
              <!-- Optionally include your referral badge here -->
            </div>
          </div>
        </div>
      </form>
    </div>
  </client-only>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  data() {
    return {
      checked: false,
      email: "",
    };
  },
  components: {
    "font-awesome-icon": FontAwesomeIcon,
  },
  mounted() {
    this.loadMailchimpScript();
  },
  methods: {
    loadMailchimpScript() {
      // Check if the script is already loaded to avoid duplicates
      if (
        !document.querySelector(
          'script[src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"]'
        )
      ) {
        const script = document.createElement("script");
        script.src =
          "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
        script.onload = () => {
          this.initializeMailchimp();
        };
        document.body.appendChild(script);
      } else {
        this.initializeMailchimp();
      }
    },
    initializeMailchimp() {
      // Initialize any Mailchimp-specific script here if necessary
      // Note: The mc-validate.js script automatically initializes forms designated with the appropriate classes and IDs.
    },
  },
  computed: {
    isEmailValid() {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    },
    isFormValid() {
      return this.checked && this.isEmailValid;
    },
  },
};
</script>

<style scoped>
#mc_embed_signup {
  font-family: "Your font family", sans-serif;
  color: var(--text-color);
}

#mc_embed_signup_scroll {
  background-color: var(--secondary-color);
  padding: 20px;
  border-radius: 8px;
}

.email {
  background-color: var(--primary-color);
  margin: 4px 0 16px 0px;
  color: var(--text-color);
  border: 2px solid var(--text-color);
  padding: 12px 24px;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

.checkbox-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  font-size: 18px;
}

.checked {
  color: var(--accent-color);
  svg {
    background-color: var(--accent-color) !important;
  }
}
.checkbox-custom {
  position: absolute;
  left: 0;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  svg {
  }
}

.checkbox-icon {
  color: var(--text-color); /* Color of the checkbox when not checked */
  margin-right: 10px; /* Space between the icon and the label text */
}

.checkbox-icon {
  /* Incorrect example, this would fill the square */
  /* background-color: var(--text-color); */
  color: var(--text-color);
}

.checkbox-container input[type="checkbox"]:checked + label .checkbox-icon {
  color: var(--accent-color); /* Color of the checkbox when checked */
}

.terms-text {
  vertical-align: middle;
}

.link {
  color: var(--link-color);
  margin: 0 5px;
  text-decoration: underline; /* If you want the links to be underlined */
}

.link:hover {
  color: var(--hover-color); /* Change color on hover */
}

.checkbox-container input[type="checkbox"]:checked + label .checkbox-icon {
  color: var(--accent-color); /* Color of the checkbox when checked */
}

/* Rest of your CSS */

.button,
.button-disabled {
  background-color: var(--primary-color);
  color: var(--primary-color);
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  letter-spacing: 2px;
  background-color: var(--text-color);
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

a {
  text-decoration: none;
  transition: color 0.3s ease;
}
a:hover {
  text-decoration: underline;
}

.button:hover {
  color: var(--accent-color);
}

.button-disabled {
  background-color: #998b7d;
  cursor: not-allowed;
  &:hover {
    color: var(--primary-color);
  }
}

/* Label Styles */
label {
  display: block;
  margin-bottom: 5px;
}

/* Response Message Styles */
#mce-responses .response {
  margin-top: 10px;
  padding: 10px;
  border-radius: 4px;
  font-size: 0.9em;
}

#mce-error-response {
  color: #ff5c5c; /* Red text color for error messages */
  border: 1px solid #ff5c5c; /* Optional: add a subtle red border */
  background-color: transparent; /* No background color */
  padding: 5px 10px;
  border-radius: 4px; /* Optional: if you want rounded corners */
  display: none; /* Initially hidden */
}

#mce-success-response {
  background-color: #ddffdd; /* Greenish background for success messages */
  border: 1px solid #5c5c; /* Green border for success messages */
}

/* Misc */
.indicates-required {
  display: none; /* Hide the indicates required text if not necessary */
}

/* Clearfix for floated elements */
.clear {
  clear: both;
}

/* Hiding the honeypot field to trap bots */
#mc_embed_signup .mc-field-group input[type="text"] {
  display: none;
}
</style>
