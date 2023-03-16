package sesac.jpa.sesac.jpa.service;

import org.springframework.beans.factory.annotation.Autowired;
import sesac.jpa.sesac.jpa.Repository.UserRepository;
import sesac.jpa.sesac.jpa.domain.UserEntity;
import sesac.jpa.sesac.jpa.dto.BoardDTO;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class MainService {
    @Autowired
    private UserRepository userRepository;

    public List<BoardDTO> getBoardList() {
        List<UserEntity> result = userRepository.findAll();
        List<BoardDTO> boards = new ArrayList<>();

        for (int i = 0; i < result.size(); i++) {
            BoardDTO board = new BoardDTO();
            board.setId(result.get(i).getId());
            board.setContent(result.get(i).getContent());
        }
    return  boards;
    }
    public ArrayList<BoardDTO> getBoardName(String name){
        Optional<UserEntity> board = userRepository.findByName(name);
        ArrayList<BoardDTO> boardList = new ArrayList<>();

        if (board.isPresent()){
            BoardDTO dto = new BoardDTO();
            dto.setId(board.get().getId());
            dto.setContent(board.get().getContent());
        } return boardList;

public void addBoard (UserEntity board) {userRepository.save(board);}
    }








    }
