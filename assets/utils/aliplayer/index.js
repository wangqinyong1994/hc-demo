var player = null;
var player1 = null;
var player2 = null;
var player3 = null;
var player4 = null;
var player5 = null;
var player6 = null;
$(function(){
    // player =  createPlayers(player,'J_prismPlayer');
    // player.on('ready',function(){
    //   console.log('ready可以调用播放器的方法了');
    // });

    // player.on('play',function(){
    //   console.log('开始播放(play)');
    // });

    // player.on('pause',function(){
    //    console.log('暂停播放(pause)');
    //  });

    // $('.change').on('click',function(){
    //     var source = $('.source').val();
    //     var playAuth = $('.playauth').val();
    //     player = createPlayers(player,'J_prismPlayer',source,playAuth);
    // })

    // $('.submit').on('click',function(){
    //     var source = $('.source').val();
    //     var playAuth = $('.playauth').val();
    //     if(!source)
    //     {
    //         return;
    //     }
    //     if(source.indexOf('//')!=-1)
    //     {
    //         player.loadByUrl(source);
    //     }
    //     else if(playAuth)
    //     {
    //         if(player.replayByVidAndPlayAuth)
    //         {
    //             player.replayByVidAndPlayAuth(source, playAuth);
    //         }
    //         else
    //         {
    //             player = createPlayers(player,'J_prismPlayer',source,playAuth);
    //         }
    //     }
    // })

vodeos(player,'J_prismPlayer','vodeo')

vodeos(player1,'J_prismPlayer1','vodeo1')
// vodeos(player2,'J_prismPlayer2','vodeo2')

// vodeos(player3,'J_prismPlayer3','vodeo3')
// vodeos(player4,'J_prismPlayer4','vodeo4')

// vodeos(player5,'J_prismPlayer5','vodeo5')
// vodeos(player6,'J_prismPlayer6','vodeo6')
    // player1 = createPlayers(player1,'J_prismPlayer1');
    // player1.on('ready',function(){
    //   console.log('ready可以调用播放器的方法了');
    // });

    // player1.on('play',function(){
    //   console.log('开始播放(play)');
    // });

    // player1.on('pause',function(){
    //    console.log('暂停播放(pause)');
    //  });

    // $('.change1').on('click',function(){
    //     var source = $('.source1').val();
    //     var playAuth = $('.playauth1').val();
    //     player1 = createPlayers(player1,'J_prismPlayer1',source,playAuth);
    // })

    // $('.submit1').on('click',function(){
    //     var source = $('.source1').val();
    //     var playAuth = $('.playauth1').val();
    //     if(!source)
    //     {
    //         return;
    //     }
    //     if(source.indexOf('//')!=-1)
    //     {
    //         player1.loadByUrl(source);
    //     }
    //     else if(playAuth)
    //     {
    //         if(player1.replayByVidAndPlayAuth)
    //         {
    //             player1.replayByVidAndPlayAuth(source, playAuth);
    //         }
    //         else
    //         {
    //             player1 = createPlayers(player1,'J_prismPlayer1',source,playAuth);
    //         }
    //     }
    // })
})
    
function vodeos(players,J_prismPlayers,vodeos){
  players =  createPlayers(players,J_prismPlayers);  //创建播放器
    $('.'+vodeos+' .change').on('click',function(){     //当点击时切换时
        var source = $('.'+vodeos+ ' .source').val();                //视频流 源头
        var playAuth = $('.playauth').val();
        players = createPlayers(players,J_prismPlayers,source,playAuth);
    })

    $('.'+vodeos+' .submit').on('click',function(){     //当点击提交时 
        var source = $('.'+vodeos+ ' .source').val();
        var playAuth = $('.playauth').val();
        if(!source)
        {
            return;
        }
        if(source.indexOf('//')!=-1)
        {
            players.loadByUrl(source);
        }
        else if(playAuth)
        {
            if(players.replayByVidAndPlayAuth)
            {
                players.replayByVidAndPlayAuth(source, playAuth);
            }
            else
            {
                players = createPlayers(players,J_prismPlayers,source,playAuth);
            }
        }
    })
}

function createPlayers(players,J_prismPlayers,source, playauth)
{
  console.log(J_prismPlayers,1111,players)
    if(players)
    {
        players.dispose();
        $('#'+J_prismPlayers).empty();
        players = null;
    }
    var vid = source;
    if(!source && !playauth)
    {
        source = '';
        vid = "";
        playauth = "";
    }
    else if(source.indexOf('//')!=-1)
    {
        playAuth = "";
    }
    else if(playauth)
    {
        source = "";
    }
    var option = {
    id: J_prismPlayers,
        autoplay: true,
         isLive:true,
         playsinline:true,
         width:"100%",
         height:"60%",
         controlBarVisibility:"click",
         useH5Prism:true, //启用H5播放器
         useFlashPrism: false,  //指定flash播放器
         source:source,
         onlyvideo:'yes',
         vid:vid,
         playauth:playauth,
         cover:"",
         enableStashBufferForFlv:false,
         trackLog:false,
         flvOption:{                  //定时清除播放器缓存
            autoCleanupSourceBuffer:true,
            autoCleanupMaxBackwardDuration:30,
            autoCleanupMinBackwardDuration:10,
            hasAudio:false
          },         
    };


    return new Aliplayer(option);
}