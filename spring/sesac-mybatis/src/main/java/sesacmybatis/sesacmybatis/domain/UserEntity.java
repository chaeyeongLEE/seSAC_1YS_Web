package sesacmybatis.sesacmybatis.domain;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Entity //해당 클래스가 Entity 클래스 라는 것을 알려준다.
@Table(name="user") //테이블 이름 명시
@Getter
@Setter

public class UserEntity {
    @Id
    @GeneratedValue
    private int id; //id primary key auto_increment,라는 뜻
    @Column(length = 10, nullable = false)
    // name varchar(20) not null
    private  String name;

    @Column(length = 10, nullable = false)
    private String nickname;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }


}
