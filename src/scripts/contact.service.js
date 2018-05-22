function ContactService() {
    var factory = {};
  
    factory.getContacts = function () {
      return contactList;
    }

    factory.deleteContact = function (contact) {
        var index = contactList.indexOf(contact);
        contactList.splice(index, 1);
        // $scope.removed = 'Contact successfully removed.';
     }


    factory.addToContacts = function (contact) {
         contactList.push(contact);
      }
      factory.updateContact = function (contact,index) {
        // var index = contactList.indexOf(contact);
        contactList[index] = contact;
    
    }
  
    // contact list, usually would be a separate database
    var contactList = [
      {id: 0, name: 'Tony Stark', firstName: 'Tony', email: 'tony@ironman.com', phone: '1234567890', lstName: 'Stark', status: 'Active'},
      {id: 1, name: 'Hock Eye', firstName: 'Hock', email: 'hocki@archer.com', phone: '987654331', lstName: 'Eye', status: 'Inactive'},
      {id: 2, name: 'Natasha Romonov', firstName: 'Natasha', email: 'nat01@gunner.com', phone: '87127899', lstName: 'Romonov', status: 'Active'},
      {id: 3, name: 'Bruce Banner', firstName: 'Bruce', email: 'bruceb@hulk.com', phone: '1289787956', lstName: 'Banner', status: 'Active'},
      {id: 4, name: 'Nick Fury', firstName: 'Nick', email: 'beyounick@avengers.com', phone: '8097890', lstName: 'Fury', status: 'Inactive'}
      
    ];
    
    return factory;
  }

  export default ContactService;
