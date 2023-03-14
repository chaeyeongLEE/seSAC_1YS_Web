package sesac.sesac.spring.Controller;

import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

//실제로 컨트롤러 동작을 하게끔 하는 친구
@Controller
public class HelloController {
    @GetMapping("/hi") //app.get
    public String getHi(Model model) {
        model.addAttribute("msg", "메세지입니다!");
        model.addAttribute("utext", "<strong> utext입니다. </strong>");
        model.addAttribute("age", 23);//컨트롤러에서 값을 담아서 모델로 보낸다.
        return "hi"; //res.redner("hi) 템플릿 내 hi.html 파일을 보여준다.
    }
    @GetMapping("/people")
    public String getPeople(Model model){
            ArrayList<Person> people = new ArrayList<Person>();
            people.add(new Person("kim", 10));
            people.add(new Person("lee",20));
            people.add(new Person("hong", 30));
            people.add(new Person("park", 40));
            model.addAttribute("people", people);
            return "people";
        }

}
