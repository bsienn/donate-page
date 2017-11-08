var html = require('choo/html')

module.exports = function () {
  return html`
    <footer class="footer">
        <div class="footer-text">
            <p>By donating, you agree to share your personal information with the freeCodeCamp Foundation, the nonprofit organization
                that hosts Wikipedia and other freeCodeCamp projects, and its service providers pursuant to our <a href="javascript:;">donor policy</a>.
                freeCodeCamp Foundation and its service providers are located in the United States and in other countries whose
                privacy laws may not be equivalent to your own. We do not sell or trade your information to anyone. For more
                information please read our <a href="javascript:;">donor policy</a>.
            </p>

            <p>
                <a href="javascript:;">
                    For recurring donors, fixed monthly payments will be debited by the freeCodeCamp Foundation on the monthly anniversary of the first donation, until such time as you notify us to discontinue them. Donations initiated on the 29, 30, or 31 of the month will recur on the last day of the month for shorter months, as close to the original date as possible. For questions, please contact donate@freeCodeCamp.org.
                </a>
            </p>

            <div class="footer_links">
                <a href="javascript:;">Problems donating?</a>
                <a href="javascript:;">Frequently asked questions</a>
            </div>
        </div>
    </footer>
  `
}
