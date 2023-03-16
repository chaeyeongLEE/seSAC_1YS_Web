package sesac.jpa.sesac.jpa.controller;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import sesac.jpa.sesac.jpa.domain.UserEntity;
import sesac.jpa.sesac.jpa.dto.BoardDTO;
import sesac.jpa.sesac.jpa.service.MainService;

import java.util.ArrayList;

public class MainController {
    @Autowired
    MainService mainService;

    @GetMapping("/board")
    public String getBoard(Model model){
        ArrayList<BoardDTO> boardList = (ArrayList<BoardDTO>) mainService.getBoardList();
        model.addAttribute("list", boardList);
        return "board";
    }
    @GetMapping("/board/insert")
    public String getInsertBoard(@RequestBody String name, @RequestBody String content, Model model){
        UserEntity user = new UserEntity();
        user.setName(name);
        user.setContent(content);
        mainService.addBoard(board);
    }
}
