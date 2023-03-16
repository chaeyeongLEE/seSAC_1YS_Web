package sesac.jpa.sesac.jpa.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import sesac.jpa.sesac.jpa.entity.CrudEntity;

import java.util.List;

@Repository
public interface CrudEntityRepository extends JpaRepository<CrudEntity, String> {
    @Query(value = "selecet name, age from sample_member where name= :name", nativeQuery = true)
    List<CrudEntity> searchParamRepo(@Param("name")String name);
}
