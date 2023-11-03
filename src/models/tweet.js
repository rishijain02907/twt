const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content:{
        type: String,
        require: true,
        max: [250, "tweet cannot be more than 250 characters"]
    },
    hashtag: [ // multiple hashtags in our corresponding tweet
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ]
}, {timestamps:true});

const Tweet = mongoose.model('Tweet',tweetSchema);
module.exports = Tweet;