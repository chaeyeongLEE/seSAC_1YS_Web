package sesacmybatis.sesacmybatis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesacmybatis.sesacmybatis.domain.User;
import sesacmybatis.sesacmybatis.domain.UserEntity;
import sesacmybatis.sesacmybatis.dto.UserDTO;
import sesacmybatis.sesacmybatis.mapper.MainMapper;
import sesacmybatis.sesacmybatis.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MainService {
    @Autowired
    private MainMapper mainMapper;
    @Autowired
    private UserRepository userRepository;

    public List<UserDTO> getUserList(){
       // List<User> result = mainMapper.retrieveAll();
        // List<UserDTO> users = new ArrayList<UserDTO>();
        List<UserEntity> result = userRepository.findAll();
        // select*from 과 같은 의미
        List<UserDTO> users = new ArrayList<>();


        for (int i=0; i< result.size(); i++){
            UserDTO user = new UserDTO();
            user.setId(result.get(i).getId());
            user.setName(result.get(i).getName());
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(i+1);

            users.add(user);
        }
        return users;
    }

    //public void addUser(User user){mainMapper.insertUser(user);}

    public void addUser(UserEntity user){userRepository.save(user);}

    public ArrayList<UserDTO> getUserName(String name){
        Optional<UserEntity>user = userRepository.findByName(name);
        ArrayList<UserDTO> userList = new ArrayList<>();

        if (user.isPresent()){
            //isPresent로 감싸진 객체가 널값인지아닌지 확인
            UserDTO dto = new UserDTO();
            dto.setId(user.get().getId());
            dto.setNo(0);
            dto.setName(user.get().getName());
            dto.setNickname(user.get().getNickname());
            userList.add(dto);
        }
            return userList;

}
    }