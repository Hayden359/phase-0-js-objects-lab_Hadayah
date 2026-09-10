//Objects
  let attendee = 
    ["attendeeID" , "name" , "event" , "ticketType" , "ticketPrice"]
  
  //functions

  function logAttendeeName(name) {
  attendee.name = name;
  console.log(attendee.name);
  return attendee.name;
  }

  function logTicketPrice(price) {
  attendee.ticketPrice = price;
  console.log(attendee.ticketPrice);
   return attendee.ticketPrice;
  }

  function updateTicketType(ticketType) {
  attendee.ticketType = ticketType;
  console.log(attendee.ticketType);
    return attendee.ticketType;
  }

  function updateTicketPrice(ticketPrice) {
  attendee.ticketPrice = ticketPrice;
  console.log(attendee.ticketPrice);
    return attendee.ticketPrice;
  }

  function removeEventProperty() {
  delete attendee.event;
  console.log(attendee.event);
    return attendee.event;
  }

  function addCheckedInProperty() {
  attendee.checkedIn = true;
  console.log(attendee);
    return attendee;
  }

  //activate functions
   attendee.attendeeID = "T001";
 logAttendeeName("Alice Smith");

 logTicketPrice(150.00);

 updateTicketType("VIP");

 




//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};