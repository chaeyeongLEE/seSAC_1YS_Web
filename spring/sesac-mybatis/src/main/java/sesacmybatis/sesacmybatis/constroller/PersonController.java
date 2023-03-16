package sesacmybatis.sesacmybatis.constroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesacmybatis.sesacmybatis.domain.Person;
import sesacmybatis.sesacmybatis.dto.PersonDTO;
import sesacmybatis.sesacmybatis.service.PersonService;

@Controller
// @RestController 요청에 응답하는 아이 // personController 안에 있는 모든 함수들이  @ResponseBody 가 붙는다?
@RequestMapping("/person") //아래의 주소에 (컨트롤러 위에서) 리퀘스트매핑을 걸쳐서 레지스터 앞에 펄슨이 붙는다.
public class PersonController {
    @Autowired
    PersonService personService;
    @GetMapping("/register")
    public String getRegister(){
        return "register";
    }
    @PostMapping("/register")
    @ResponseBody //결과를 리턴해주겠다.
    public String postRegister(@RequestBody PersonDTO personDTO){
        personService.insertPerson(personDTO) ;
        return "";
    }

    @GetMapping("/login")
    public String getLogin(){
        return "login";
}

    @PostMapping("/login")
    @ResponseBody
    public boolean postLogin(@RequestBody PersonDTO personDTO){
        PersonDTO person = personService.getPerson(personDTO);
       if (person == null) return false;
       else return true;
    }

    @PostMapping("/info")
    public String postInfo(PersonDTO personDTO, Model model) {
        PersonDTO person = personService.getPerson(personDTO);
        model.addAttribute("person", person);
        return "info";
    }
    @PostMapping("/info/edit")
    @ResponseBody
    public String postInfoEdit(@RequestBody PersonDTO personDTO){
        personService.updatePerson(personDTO);
        return "";
    }
    @PostMapping("/info/delete")
    @ResponseBody
    public String postInfoDelete(@RequestBody PersonDTO personDTO){
        personService.deletePerson(personDTO);
        return "";
    }
}
