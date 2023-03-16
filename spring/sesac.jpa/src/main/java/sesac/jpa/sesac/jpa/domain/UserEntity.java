package sesac.jpa.sesac.jpa.domain;

import javax.persistence.*;

@Entity
@Table(name = "board")
public class UserEntity {
    @Id
    @GeneratedValue
    private int id;

    @Column(length = 10, nullable = false)
    private String name;
    @Column(length = 10, nullable = false)
    private String content;


    public int getId() {return id;}

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}



