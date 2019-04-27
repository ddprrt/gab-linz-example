const qs = require('querystring')

module.exports = async function(context, req) {
  const params = qs.parse(req.body)
  context.log(req, params)
  const message = {
    "personalizations": [ { "to": [ { "email": "sbaumg@gmail.com" } ] } ],
    from: { email: params.mail },        
    subject: "Feedback from Website",
    content: [{
      type: 'text/plain',
      value: `${params.name} says: ${params.text}`
    }]
  }
  return {
    httpResponse: {
      body: 'Stefan',
      headers: {
        location: 'https://ftblg.z6.web.core.windows.net/success',
      },
      status: 302
    },
    sendgrid: message
  }
}
