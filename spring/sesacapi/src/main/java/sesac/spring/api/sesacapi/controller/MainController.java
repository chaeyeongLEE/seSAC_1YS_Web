package sesac.spring.api.sesacapi.controller;

import org.apache.catalina.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.spring.api.sesacapi.dto.UserDTO;
import sesac.spring.api.sesacapi.vo.UserVO;

@Controller
public class MainController {
    @GetMapping("/")
    public String main(){
        return "request";
    }
    @GetMapping("/get/response1")
    public String getAPI1(@RequestParam(value = "name") String name2, Model model) {
        model.addAttribute("name", name2);
        return "response";
    }
    @GetMapping("/get/response2")
    //get방식할 때 물음표 뒤에 사용하는게 리퀘스트파람
    public String getAPI2(@RequestParam(value = "name", required = false) String name2, Model model){
        model.addAttribute("name", name2);
        return "response";
    }

    @GetMapping("/get/response3/{name}/{age}")
    public String getAPI3(@PathVariable String name, @PathVariable("age") String abc, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", abc);
        return "response";
    }

    @GetMapping({"/get/response4/{name}", "/get/response4/{name}/{age}"})
    public String getAPI4(@PathVariable String name, @PathVariable(value = "age", required = false) String abc, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", abc);
        return "response";
    }

    //홍길동
    @GetMapping({"/introduce/{name}"})
    public String getAPI5(@PathVariable String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }

    @GetMapping({"/introduce2/{name}", "/introduce2/{name}/{age}"})
    public String getAPI6(@PathVariable String name, @PathVariable(value = "age", required = false) String abc, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", abc);
        return "response";
    }

    //post로 값이 갔을 때 어떻게 받느냐 requestParams 이용해서!
    @PostMapping("/post/response1")
    public String postAPI1(@RequestParam(required = false) String name, Model model){
        model.addAttribute("name",name);
        return "response";
    }

    @PostMapping("/post/response2")
    public String postAPI2(@RequestParam(required = false) String name, Model model){
        model.addAttribute("name",name);
        return "response";
    }
    //res.send
    @PostMapping("/post/response3")
    @ResponseBody   //res.send
    public String postAPI3(@RequestParam(required = false) String name){
        return "이름은 : "+ name;
    }

    @PostMapping("/post/response4")
    @ResponseBody   //res.send
    public String postAPI4(@RequestParam(required = false) String name, String gender, String date, String interest){
        return "이름 : "+ name + "성별 : " + gender+ "생년월일 : "+ date + "관심사 :" + interest;
    }

    @GetMapping("/dto/response1")
    @ResponseBody
    public String dtoAPI1(UserDTO userDTO){
     String msg = userDTO.getName()+""+userDTO.getAge()+"!!!";
     return msg;
    }

    @PostMapping("/dto/response2")
    @ResponseBody
    public String dtoAPI2(UserDTO userDTO) {
        String msg = userDTO.getName() + "" + userDTO.getAge() + "!!!";
        return msg;
    }

    @PostMapping("/dto/response3")
    @ResponseBody
    public String dtoAPI3(@RequestBody UserDTO userDTO) {
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }

    @GetMapping("/vo/response1")
    @ResponseBody
    public String voAPI1(UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이:" + userVO.getAge();
        return msg;
    }

    @PostMapping("/vo/response2")
    @ResponseBody
    public String voAPI2(UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이:" + userVO.getAge();
        return msg;
    }
    @PostMapping("/vo/response3")
    @ResponseBody
    public String voAPI3(@RequestBody UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이:" + userVO.getAge();
        return msg;
    }


//    DTO - axios
    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosAPI1(@RequestParam(value = "name") String name, @RequestParam(value = "name") String age){
        String msg = "이름 :" + name + "\n나이:" + age;
        return msg;
    }

    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosAPI2(UserDTO userDTO){
        String msg = "이름 :" + userDTO.getName()+"\n나이:"+userDTO.getAge();
        return msg;
    }

    @PostMapping ("/axios/response3")
    @ResponseBody
    public String axiosAPI3(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 :" + name + "\n나이 : "+ age;
        return msg;
    }
 @PostMapping("/axios/response4")
    @ResponseBody
    public String axiosAPI4(UserDTO userDTO){
        String msg = "이름 :" +  userDTO.getName()+"\n나이:"+userDTO.getAge();
        return msg;
    }
    @PostMapping("/axios/response5")
    @ResponseBody
    public String axiosAPI5(@RequestBody UserDTO userDTO){
        String msg = "이름 :" +  userDTO.getName()+"\n나이:"+userDTO.getAge();
        return msg;
    }


    //axios-VO
    @GetMapping("/axios/vo/response1")
    @ResponseBody
    public String axiosvoAPI1(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 :" + name + "\n나이:" + age;
        return msg;
    }

    @GetMapping("/axios/vo/response2")
    @ResponseBody
    public String axiosvoAPI2(UserVO userVO){
        String msg = "이름 :" + userVO.getName()+"\n나이:"+userVO.getAge();
        return msg;
    }

    @PostMapping ("/axios/vo/response3")
    @ResponseBody
    public String axiosvoAPI3(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 :" + name + "\n나이 : "+ age;
        return msg;
    }
    @PostMapping("/axios/vo/response4")
    @ResponseBody
    public String axiosvoAPI4(UserVO userVO){
        String msg = "이름 :" +  userVO.getName()+ "\n나이:"+ userVO.getAge();
        return msg;
    }

    @PostMapping("/axios/vo/response5")
    @ResponseBody
    public String axiosvoAPI5(UserVO userVO){
        String msg = "이름 :" +  userVO.getName()+ "\n나이:"+ userVO.getAge();
        return msg;
    }

    @GetMapping("/axios/vo/response6")
    @ResponseBody
    public String axiosvoAPI6(UserVO userVO){
        String msg = "이름 :" + userVO.getName();
        return msg;
    }


    @GetMapping("/axios/vo/response7")
    @ResponseBody
    public String axiosvoAPI7(@RequestParam(value = "name") String name){
        String msg = name;
        return msg;
    }
}