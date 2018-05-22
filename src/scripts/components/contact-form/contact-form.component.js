class ContactFormCtrl {
    constructor($location, $routeParams, ContactService, nameService) {
        this.path = $location.path();
        // console.log("Path--->", this.path);

        this.contactService = ContactService;
        this.nameService = nameService;
        this.contacts = this.contactService.getContacts();

        var index = $routeParams.contact_index;
        this.currentContact = this.contacts[index];

        this.validateForm = () => {
            if (this.currentContact) {
                if (!this.currentContact.firstName) {
                    return false
                }
                if (!this.currentContact.email) {
                    return false
                }
                if (!this.currentContact.phone) {
                    return false
                }
                return true
            }
            return false;
        }

        this.addContact = () => {
            if (this.validateForm()) {
                this.currentContact.name = this.nameService.getFullName(this.currentContact.firstName,this.currentContact.lstName);
                // console.log("current>>", this.currentContact);
                if (this.path === '/add') {
                    var contact = this.currentContact;
                    contact.id = this.contacts.length;
                    this.contactService.addToContacts(contact);
                    $location.path("/contact-info/" + (this.contacts.length - 1));
                }
                else {
                    this.contactService.updateContact(this.currentContact,$routeParams.contact_index);
                    $location.path("/contact-info/" + $routeParams.contact_index);
                }

            }


        }
    };


}

let ContactForm = {
    // bindings :{
    //     currentContact:'<'
    // },
    controller: ContactFormCtrl,
    templateUrl: 'scripts/components/contact-form/contact-form.html'
};

export default ContactForm;
