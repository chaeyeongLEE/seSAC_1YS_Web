package sesac.jpa.sesac.jpa.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import sesac.jpa.sesac.jpa.Repository.CrudEntityRepository;
import sesac.jpa.sesac.jpa.entity.CrudEntity;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
@RestController
@RequiredArgsConstructor
@RequestMapping
public class CrudController {
    private final CrudEntityRepository crudEntityRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @GetMapping("search")
    public String searchAllMember() {
        return crudEntityRepository.findAll().toString();
    }

    @GetMapping("insert")
    public String insertMember(@RequestParam(value="name")String name, @RequestParam(value = "age") int age) {
        if(crudEntityRepository.findById(name).isPresent()){
            return "동일한 이름이 있습니다.";
        } else {
            CrudEntity entity = CrudEntity.builder().name(name).age(age).build();
            // 테이블정보가 있는 entity 선언하고, Entity이름.builder() 를 사용해서 파라미터를 넣어줄 수 있는데
            // .name(name) 이면 name 컬럼에 호출하면서 파라미터로 받은 name을 넣어준다는 말.
            crudEntityRepository.save(entity);
            //파라미터를 넣어준 후 .build() 를 써서 완성해주면 되는데 저장 자체는 Repository.save(Entity명);
            return "이름:" + name + "나이:" + age +"으로 추가되었습니다.";
        }
    }

    @GetMapping("update")
    public String updateMember(@RequestParam(value="name")String name, @RequestParam(value = "age") int age) {
        if(crudEntityRepository.findById(name).isEmpty()){ //값 존재여부 확인
            return "입력한" + name + "이 존재하지않습니다";
        } else {
            crudEntityRepository.save(CrudEntity.builder().name(name).age(age).build());
            return name + "의 나이를" + age +"로 변경완료";
        }
    }

    @GetMapping("delete")
    public String deleteMember(@RequestParam(value="name")String name) {
        if(crudEntityRepository.findById(name).isEmpty()){ //값 존재여부 확인
            return "입력한" + name + "이 존재하지않습니다";
        } else {
            crudEntityRepository.delete(CrudEntity.builder().name(name).build());
            //repository.delete(Entity명); 삭제를 의미함.
            return name + "삭제완료";
        }
    }
}
