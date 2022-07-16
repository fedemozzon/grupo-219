package com.example.pruebita.repository;

import com.example.pruebita.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends CrudRepository<User, Integer> {
     User findByMailUser(String mailUser);
}
