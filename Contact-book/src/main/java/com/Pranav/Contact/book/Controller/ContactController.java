package com.Pranav.Contact.book.Controller;

import com.Pranav.Contact.book.Domain.Contact;
import com.Pranav.Contact.book.Respostiory.ContactRepository;
import com.Pranav.Contact.book.Services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ContactController {

    @Autowired
    ContactService contactService;

    @Autowired
    ContactRepository contactRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET,value="/contacts")
    public  Iterable<Contact> contact()
    {
        return contactService.getContacts();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method = RequestMethod.GET,value = "/contact/{id}")
    public Contact getContactWithId(@PathVariable long id)
    {
        Optional<Contact> getContact=contactRepository.findById(id);
        Contact c=getContact.get();
        return c;
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method=RequestMethod.POST, value="/contacts")
    public Contact save(@RequestBody Contact contact) {
        contactService.saveContact(contact);

        return contact;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method=RequestMethod.PUT, value="/contacts/{id}")
    public Contact update(@PathVariable long id, @RequestBody Contact contact) {

        return  contactService.updateContact(id,contact);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(method=RequestMethod.DELETE, value="/contacts/{id}")
    public String delete(@PathVariable long id) {
        contactService.deleteContact(id);
        return "";
    }
}
