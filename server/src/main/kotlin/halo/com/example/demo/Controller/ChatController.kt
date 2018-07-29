package com.halo.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import com.halo.repository.FeedRepository

@RestController
class ChatController constructor(val repository: FeedRepository){

//    var respository: FeedRepository;
//    fun ChatController(FeedRepository repository) {this.repository = repository}

//    @GetMapping("/greet")
//    public Collection<Feed> greet()

    @GetMapping("/greet")
    fun greet(): String  {
        return "Hello World!"
    }

}