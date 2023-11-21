package dev.lapointe.coachsearch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CoachService {
    @Autowired
    private CoachRepository coachRepository;

    public List<Coach> allCoaches(){
        return coachRepository.findAll();
    }

    public Optional<Coach> singleCoach(String id){
        return coachRepository.findById(id);
    }
}
