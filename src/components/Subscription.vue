<template>
  <client-only>
    <div class="subscription-wrapper" id="mc_embed_signup">
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
          <h2>Subscribe</h2>
          <div class="indicates-required">
            <span class="asterisk">*</span> indicates required
          </div>
          <div class="mc-field-group">
            <label for="mce-EMAIL"
              >Email Address <span class="asterisk">*</span></label
            >
            <input
              type="email"
              value=""
              name="EMAIL"
              class="required email"
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
                value="Subscribe"
                name="subscribe"
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
.subscription-wrapper {
  background-color: #999;
  color: #333;
  margin: 50px auto 50px; /* Added margin-bottom */
  text-align: center;
  width: 1040px;
  max-height: 40vh;
  overflow: auto;
  border-radius: 15px;
  padding: 50px 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif; /* Changed font */
}
</style>
