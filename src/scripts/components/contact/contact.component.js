class ContactCtrl {
    constructor(ContactService) {
        this.contactService = ContactService;
        this.contacts = this.contactService.getContacts();
    }
}

let Contact = {
    // bindings :{
    //     list:'<'
    // },
    controller: ContactCtrl,
    templateUrl: 'scripts/components/contact/contact.html'
};

export default Contact;
