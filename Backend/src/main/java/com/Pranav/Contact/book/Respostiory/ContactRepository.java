package com.Pranav.Contact.book.Respostiory;

import com.Pranav.Contact.book.Domain.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<Contact,Long>
{
}
