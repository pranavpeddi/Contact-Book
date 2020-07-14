package com.Pranav.Contact.book.Services;


import com.Pranav.Contact.book.Domain.Contact;
import com.Pranav.Contact.book.Respostiory.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {


    @Autowired
    private ContactRepository contactRepository;

    public void saveContact(Contact contact)
    {
        contactRepository.save(contact);
    }


    public Iterable<Contact> getContacts()
    {
        return contactRepository.findAll();
    }

    public Contact updateContact(long id,Contact contact)
    {
        Optional<Contact> optionalContact=contactRepository.findById(id);
        Contact c=optionalContact.get();



          if(contact.getAge()!=0)
          {
            c.setAge(contact.getAge());
          }
          if(contact.getName()!=null)
          {
              c.setName(contact.getName());
          }
          if(contact.getEmail()!=null)
          { c.setEmail(contact.getEmail());
          }

          contactRepository.save(c);



        return  c;
    }

    public void deleteContact(long id){
        Optional<Contact> optionalContact=contactRepository.findById(id);
        Contact contact=optionalContact.get();
        contactRepository.delete(contact);

    }
}
