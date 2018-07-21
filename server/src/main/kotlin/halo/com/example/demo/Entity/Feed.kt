package halo.com.example

import lombok.*;

@Entity
@Getter @Setter
@NoArgsConstructor
@ToString @EqualsAndHashCode
public class Feed {
    //設計
    @Id @GeneratedValue
    private Long id;
    private @NonNull String message;
    private @NonNull String user;
}
