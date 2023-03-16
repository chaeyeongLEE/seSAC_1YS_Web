package sesacmybatis.sesacmybatis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sesacmybatis.sesacmybatis.domain.UserEntity;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByName(String name);
    // select~~ where name = #{name}
   // Optional<UserEntity> findById(int id);
    // select~~ where io = #{id}
    // findById 뒤에 조건을 걸어주면 그 안의 조건에 따라 얘가 움직인다.
    //Optional<UserEntity> findByIdName(int id, String name);

   // boolean existsByName (String name);
    // 저 이름이 있는지없는지 boolean을 통해 값을 체크해준다.

    // UserEntity userEntity
    // Optional<UserEntity> user; user.get() 옵셔널 안에 유저엔티티가 있고 유저가 있고를 의미. 객체가 null인 상태에서 오류가 발생할 수있기때매 사용.
    // 옵셔널은 널값인지 아닌지를 확인해줌
    
}
