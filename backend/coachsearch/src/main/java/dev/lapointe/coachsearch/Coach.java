package dev.lapointe.coachsearch;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "coachPost")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Coach {

    @Id
    private String id;
    private String name;
    private String desc;
    private String age;
    private String currentTeam;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getCurrentTeam() {
        return currentTeam;
    }

    public void setCurrentTeam(String currentTeam) {
        this.currentTeam = currentTeam;
    }
}
