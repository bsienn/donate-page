var html = require('choo/html')

module.exports = donateView

function donateView (state, emit) {
  var donateProcessed = state.checkout.pending || (state.checkout.success || state.checkout.error)
  return html`
    <div>
      ${donateButtons()}

      ${donateProcessed ? donateResults() : ''}
    </div>
  `

  function donateResults () {
    var msg = ''
    var bgClass = ''

    if (state.checkout.pending) {
      bgClass = 'alert alert-info'
      msg = 'We are processing your donation...'
    }

    if (state.checkout.success) {
      bgClass = 'alert alert-success'
      msg = `
        You donated $${state.checkout.amount / 100} to freecodecamp.org.
        Thank you!
      `
    }

    if (state.checkout.error) {
      bgClass = 'alert alert-danger'
      msg = `
        We had trouble processing your donation:
        ${state.checkout.error}
      `
    }

    return html`
      <div class="${bgClass}"> ${msg} </div>
    `
  }

  function donateButtons () {
    const staticButtons = html`
        <ul id="select_amount">
            <li><a href="javascript:;" onclick=${() => { emit('checkout', 300) }} class="btn btn-default thar-three btn-block">$3</a></li>
            <li><a href="javascript:;" onclick=${() => { emit('checkout', 500) }} class="btn btn-default thar-three btn-block">$5</a></li>
            <li><a href="javascript:;" onclick=${() => { emit('checkout', 1000) }} class="btn btn-default thar-three btn-block">$10</a></li>
            <li><a href="javascript:;" onclick=${() => { emit('checkout', 2000) }} class="btn btn-default thar-three btn-block">$20</a></li>
            <li><a href="javascript:;" onclick=${() => { emit('checkout', 3000) }} class="btn btn-default thar-three btn-block">$30</a></li>
            <li><a href="javascript:;" onclick=${() => { emit('checkout', 5000) }} class="btn btn-default thar-three btn-block">$50</a></li>
            <li><a href="javascript:;" onclick=${() => { emit('checkout', 1000) }} class="btn btn-default thar-three btn-block">$100</a></li>
            <li><a href="javascript:;" onclick=${() => { emit('toggleValInput')}} class="btn btn-default thar-three btn-block">Other</a></li>
        </ul>
    `
    if (!state.showValInput) return staticButtons

    return html`
      <form id="select_amount" onsubmit=${(e) => submitOther(e)}>
        <div id="other_amount_parent" class="col-md-12 form-group" style="padding: 0 5px;">
            <input onkeyup=${(e) => inputHandler(e) } type="number" id="donate-amount" class="form-control" min="1" onwheel="javascript:event.preventDefault();">
        </div>

        <div class="col-md-8 form-group" style="padding: 0 5px;">
            <button onclick=${(e) => submitOther(e) } class="btn btn-primary btn-block">Donate by credit/debit card</button>
        </div>
        <div class="col-md-4 form-group" style="padding: 0 5px;">
            <button onclick=${() => { emit('toggleValInput')}} class="btn btn-default btn-block">Cancel</button>
        </div>
      </form>
    `

    latst_value = '';
    function inputHandler (e) {
        var value = e.target.value

        if (!value) {
            e.target.value = latst_value
        }

        latst_value = value;
    }

    function submitOther (e) {
      e.preventDefault()
      const value = document.getElementById('donate-amount').value
      if (!value) return
      emit('checkout', value * 100)
    }
  }
}
