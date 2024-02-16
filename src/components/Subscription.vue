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
          <div class="mc-field-group" style="">
            <label style="text-align: left" for="mce-EMAIL"
              >Email Address</label
            >
            <input
              class="email"
              type="email"
              value=""
              name="EMAIL"
              id="mce-EMAIL"
              required
            />
          </div>
          <!-- Your additional form fields here -->
          <div id="mce-responses" class="clear">
            <div
              class="response"
              id="mce-error-response"
              style="display: none"
            ></div>
            <div
              class="response"
              id="mce-success-response"
              style="display: none"
            ></div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input
              type="text"
              name="b_4ebca535469760da3df7fc52d_3ccaa29823"
              tabindex="-1"
              value=""
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
export default {
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
};
</script>

<style scoped>
/* Assuming --primary-color, --secondary-color, and --text-color are defined in the root or another higher-level style sheet */
/* Form and Field Styles */
#mc_embed_signup {
  font-family: "Your font family", sans-serif; /* Update with your actual font family */
  color: var(--text-color);
}

#mc_embed_signup_scroll {
  background-color: var(
    --secondary-color
  ); /* Choose a secondary color that fits your theme */
  padding: 20px;
  border-radius: 8px; /* Optional: if you use rounded corners */
}

.email {
  background-color: var(--primary-color);
  margin: 4px 0 16px 0px;
  color: var(--text-color);
  border: 2px solid var(--text-color); /* Change border color if needed or remove for no border */
  padding: 12px 24px;
  border-radius: 4px; /* Slightly rounded corners for the input field */
  width: 100%; /* Full width */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

/* Button Styles */
.button {
  background-color: var(
    --primary-color
  ); /* Primary color for your CTA button */
  color: var(
    --primary-color
  ); /* Text color for the button, often white or another light color */
  border: none; /* No border for the button */
  padding: 12px 24px;
  font-size: 18px;
  letter-spacing: 2px;
  background-color: var(--text-color);
  border-radius: 4px; /* Rounded corners for the button */
  text-transform: uppercase; /* Optional: if you use uppercase text for CTAs */
  font-weight: bold; /* Optional: if you want bold text on the button */
  cursor: pointer; /* Hand cursor on hover */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

.button:hover {
  color: var(--accent-color);
}

/* Label Styles */
label {
  display: block;
  margin-bottom: 5px;
  font-weight: normal; /* Match the font-weight with your site's design */
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
