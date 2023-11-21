package dev.lapointe.coachsearch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/coaches")
@CrossOrigin("http://localhost:5173/")
public class CoachController {
    @Autowired
    private CoachService coachService;

    @GetMapping
    public ResponseEntity<List<Coach>> getAllCoaches(){
        return new ResponseEntity<List<Coach>>(coachService.allCoaches(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Coach>> getSingleCoach(@PathVariable String id){
        return new ResponseEntity<Optional<Coach>>(coachService.singleCoach(id), HttpStatus.OK);
    }

}
