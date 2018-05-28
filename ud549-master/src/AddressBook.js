function AddressBook () {
	this.contacts = [];
}

	AddressBook.prototype.addContact = function (contact) {
		this.contacts.push(contact);
}	

	AddressBook.prototype.getContact = function (index) {
		this.contacts[index];
}
