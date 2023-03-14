package sesacmybatis.sesacmybatis.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import sesacmybatis.sesacmybatis.domain.User;

import java.util.List;

@Mapper
public interface MainMapper {
    //mapper 참고하기
    List<User> retrieveAll();

    //mapper 참고 안 하기
    @Insert("insert into user(name, nickname) values(#{name}, #{nickname})")
    //insert()의 내용을 실행하겠다. 유저라는 객체를 받아오겠다는것이고 (#{객체})의 형태로 가져와야한다(=맵핑).
    void insertUser(User user);
}
