// Login services
ServiceConfiguration.configurations.upsert({
  service: 'google'
}, {
  $set: {
    clientId: google.clientId,
    secret: google.secret
  }
});