class ContactInfoCtrl {
    constructor($routeParams, ContactService) {
        this.contactService = ContactService;
        this.contacts = this.contactService.getContacts();

        let index = $routeParams.contact_index;
        this.currentContact = this.contacts[index];
        this.status = this.currentContact.status === 'Active' ? 'success':'danger';
        this.removeContact = (currContact) => {
            this.contactService.deleteContact(currContact);
        }
    };


}

let ContactInfo = {
    // bindings :{
    //     currentContact:'<'
    // },
    controller: ContactInfoCtrl,
    templateUrl: 'scripts/components/contact-info/contact-info.html'
};

export default ContactInfo;
