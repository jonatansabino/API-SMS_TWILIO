import twilio from "twilio";

const accountSid=process.env.TWILIO_ACCOUNT_SI;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_NUMBER;
const twilioCliente = twilio(accountSid, authToken);
function sendMessage(message, phoneNumber){
      return twilioCliente.messages.create({
            body:message,
            from:twilioPhoneNumber,
            to:phoneNumber
      });
}

export {sendMessage}