describe('Address Book', function() {
	it('should be able to add a contact', function() {
		var addressBook = new AddressBook();
			thisContact = new Contact();

			addressBook.addContact(thisContact);

			expect(adressBook.getContact(0)).toBe(thisContact);
	}); 
});