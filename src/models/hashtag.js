const mongoose = require('mongoose');

//[we can store a tweet id inside a hashtag]one tweet can have multiple hashtags and there are multiple tweets ids which belongs to a hashtag

const hashtagSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    tweets: [ //in one hashtag we can have multiple tweets
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
}, {timestamps: true});

const Hashtag = mongoose.model('Hashtag', hashtagSchema);
module.exports = Hashtag;