package sesacmybatis.sesacmybatis.constroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import sesacmybatis.sesacmybatis.domain.User;
import sesacmybatis.sesacmybatis.dto.UserDTO;
import sesacmybatis.sesacmybatis.service.MainService;

import java.util.ArrayList;

@Controller
public class MainController {
    @Autowired
    MainService mainService;

    @GetMapping("/users")
    public String getUsers(Model model){
        ArrayList<UserDTO> userList = (ArrayList<UserDTO>) mainService.getUserList();
        model.addAttribute("list", userList);
        return  "user";
    }

    @GetMapping("/user/insert")
    public String getInsertUser(@RequestParam String name, @RequestParam String nickname, Model model){
        User user = new User();
        user.setName(name);
        user.setNickname(nickname);

        mainService.addUser(user);
//원래 컨트롤러에서 도메인을 다루면 안된다. dto 로 받아서 전달하는것이 좋음.

        model.addAttribute("list", null);
        return "user";
    }
}
