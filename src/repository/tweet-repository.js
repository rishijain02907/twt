const Tweet = require('../models/tweet');

class TweetRepository{
    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const findTwt = await Tweet.findById(id);
            return findTwt;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id){
        try {
            const findTwt = await Tweet.findById(id).populate({path:'comments'}).lean();//populate-comments array me jitna bhi data hoga sab karvyega & .lean() will convert the mongoose object to js object
            return findTwt;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id){
        try {
            const removeTwt = await Tweet.findByIdAndRemove(id);
            return removeTwt;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offest,limit){ // (2,4) 2nd se start karke 4 object dikhao offset & limit (2,4) set krne me help karenge 
        try {
            const tweet = await Tweet.find().skip(offest).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository;