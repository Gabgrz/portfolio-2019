/**
 * Sends email.
 * @param {string} to - email addresses of recipients.
 * @param {string} subject - subject of email message.
 * @param {string} body - body of email message.
 */
function sendEmail(to, cc, subject, body) {
  try {
    MailApp.sendEmail({
      to: to,
      cc: cc,
      subject: subject,
      htmlBody: body
    });
  } catch(e) {
    console.error(JSON.stringify(e));
  }
}

/**
 * Sends email with template.
 * @param {string} to - email addresses of recipients.
 * @param {string} subject - subject of email message.
 * @param {string} template - text of template.
 * @param {Object} templateParams - parameter values for template.
 */
function sendTemplateEmail(to, cc, subject, template, templateParams) {

  // Applying template parameters
  var bodyTemplate = HtmlService.createTemplate(template);
  bodyTemplate.data = templateParams;
  var body = bodyTemplate.evaluate().getContent();

  // Sending email
  sendEmail(to, cc, subject, body);
}


/**
 * Gets remaining daily quota for datasource.
 * @return {Array<RemainingDailyQuota>} result array with single record.
 */
function getRemainingDailyQuota_() {
  var result = app.models.RemainingDailyQuota.newRecord();
  result.RemainingQuota = MailApp.getRemainingDailyQuota();
  return [result];
}