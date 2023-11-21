package dev.lapointe.coachsearch;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoachRepository extends MongoRepository<Coach, String> {

}
