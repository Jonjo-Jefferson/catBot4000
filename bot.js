const dotenv = require('dotenv');
const Twitter = require('twitter');
const randomSentence = require('random-sentence');
const randomWords = require('random-words');
dotenv.config({ path: './config.env' });

const twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUME_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET,
});

newTweet = async () => {
  twitterClient.post(
    'statuses/update',
    {
      status: 'I am a ' + randomWords() + ' cat',
    },
    function (error, tweet, response) {
      if (!error) {
        console.log(tweet);
      }
      if (error) {
        console.log(error);
      }
    }
  );
};

newTweet();
