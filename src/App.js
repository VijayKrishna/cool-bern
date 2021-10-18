import './App.css';
import { Component } from 'react';
import { Stack, StackItem } from '@fluentui/react/lib/Stack';
import TweetEmbed from 'react-tweet-embed'

const stackTokens = { childrenGap: 0, padding: 10 };
var listOfImages = [];
var listOfTweets = ['1352300537484513282', '1351975936665665537', '1447874068930236416', '1448015441130135552'];

class App extends Component {

  importAll(r) {
    return r.keys().map(r);
  }
  
  componentWillMount() {
    listOfImages = this.importAll(require.context('./berns/', false, /\.(png|jpe?g|svg|JPG|webp|gif)$/));
  }

  render() {
    return (
      <Stack vertical tokens={stackTokens}>
        <StackItem><h1>❄️ Cool Bern</h1></StackItem>

        {
          listOfImages.map((image, index) => {
            let number = `${index + 1}.`
            let alt = `cool bern ${index}`
            return (
              <div>
                <h2>{number}</h2>
                <img key={index} width="100%" style= {{ maxWidth: 700 }} src={image.default} alt={alt} ></img>
              </div>
            )
          })
        }

        {
          listOfTweets.map( (tweetId, index) => {
            let number = `${index + 1 + listOfImages.length}.`
            return (
              <div>
                <h2>{number}</h2>
                <TweetEmbed id={tweetId} options={{ conversation: 'none' }}/>
              </div>
            )
          })
        }


      </Stack>
    );

  }

}

export default App;
