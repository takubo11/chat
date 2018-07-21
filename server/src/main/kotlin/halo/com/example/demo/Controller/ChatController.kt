@RestController
class ChatController {
    private FeedRepository respository;

    public ChatController(FeedRepository repository) {this.repository = repository}

//    @GetMapping("/greet")
//    public Collection<Feed> greet()

    @GetMapping("/greet")
    public String greet() {
        return "Hello World!"
    }

}