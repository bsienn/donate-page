var html = require('choo/html')
var donate = require('./donate')

module.exports = donateView

function donateView (state, emit) {
  return html`
    <section class="main-area">
        <div class="col-md-2 col-lg-2 col-md-2 col-sm-12 text-center">
            <img id="logo" src="assets/images/logo.png" class="img-responsive">
        </div>

        <div class="col-md-6 col-lg-7 hidden-sm hidden-xs">
            <div class="col-md-12">
                <div class="title">Lorem ipsum dolor sit amet.</div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
            </div>
        </div>

        <div class="col-md-4 col-lg-3 col-sm-12">
            <div id="donation_side">
                <div class="text-center"><strong>Select Montly Donation amount (USD)</strong></div>

                ${donate(state, emit)}

                <div class="where_texts">
                    <p><strong>Where your donation goes </strong></p>

                    <p> <strong>Technology:</strong> Servers, bandwidth, maintenance, development. Wikipedia is one of the top
                        10 websites in the world, and it runs on a fraction of what other top websites spend.
                    </p>

                    <p> <strong>People and Projects:</strong> The other top websites have thousands of employees. We have about
                        300 staff to support a wide variety of projects, making your donation a great investment in a highly-efficient
                        not-for-profit organization.
                    </p>
                </div>
            </div>
        </div>
    </section>
  `
}
