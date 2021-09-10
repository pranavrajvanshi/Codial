// $("#postlist").on("click", ".Likes", Likes);

function Likes(event,self,temp){
    event.preventDefault();
    // console.log(temp);
    let likesNumber = parseInt($(temp).attr("data-likes"));
    // console.log(likesNumber);
    $.ajax({
        type: 'post',
        url: $(temp).attr("href"),

        success: function(data){
            if(data.data.dislike)
            {
                likesNumber -= 1;
            }else{
                
                likesNumber += 1;
                self.socket.emit('LikeNotification', data);


            }
            $(temp).attr("data-likes", likesNumber);
            $(temp).text(`${likesNumber} Likes`);
            
        },
        error: function(error){
            // console.log(error.responseText);
            console.log("error");
        }
    });
}
