const {TweetRepository, HashtagRepository} = require('../repository');

class TweetService{
    constructor(){
        this.TweetRepository = new TweetRepository();
        this.HashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1)); //regex extracts tags & remove # from the words present in tags array
        const tweet = await this.TweetRepository.create(data);
        let alreadyPresentTags  = await this.HashtagRepository.findByName(tags);
        let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag)); //finding those tags which are not present in our database
        newTags = newTags.map(tags => {
            return {title: tags, tweets:[tweet.id]}
        });
        await this.HashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })
        return tweet;
    }
}

module.exports = TweetService;