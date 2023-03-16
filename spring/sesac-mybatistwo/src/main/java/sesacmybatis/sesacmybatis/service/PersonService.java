package sesacmybatis.sesacmybatis.service;



import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesacmybatis.sesacmybatis.domain.Person;
import sesacmybatis.sesacmybatis.dto.PersonDTO;
import sesacmybatis.sesacmybatis.mapper.PersonMapper;

@Service
@Mapper
public class PersonService {
 //회원가입
    @Autowired
    PersonMapper personMapper;
    public void insertPerson(PersonDTO personDTO){
        Person person = new Person();
        person.setId(personDTO.getId());
        person.setPw(personDTO.getPw());
        person.setName(personDTO.getName());
        personMapper.insertPerson(person);

    }
    public PersonDTO getPerson(PersonDTO personDTO){
       Person person = personMapper.getPerson(personDTO.getId(),personDTO.getPw());
       if(person == null) return null;
       PersonDTO info = new PersonDTO();
       info.setId(person.getId());
       info.setPw(person.getPw());
       info.setName(person.getName());
       info.setNickname(person.getId() + person.getName());

       return info;
    }

    public void updatePerson(PersonDTO personDTO){
        Person person = new Person();
        person.setId(personDTO.getId());
        person.setPw(personDTO.getPw());
        person.setPw(personDTO.getName());
        person.setName(personDTO.getName());

        personMapper.updatePerson(person);
    }

    public void deletePerson(PersonDTO personDTO){
        personMapper.deletePerson(personDTO.getId());
    }

    }

