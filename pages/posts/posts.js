var postData = require('../../data/posts-data.js');

Page({
    data:{

    },
    onLoad: function(){
      this.setData({
        post_key:postData.postList
      });
    },
    onCatachTap: function(event){
      var postId = event.currentTarget.dataset.postid;
      wx.navigateTo({
        url: 'post-detail/post-detail?id='+postId,
      })
    }
});