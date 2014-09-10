#Kanye Ipsum

**A jQuery plugin for adding some confidence to your placeholder text**

> "Put this in the magazine: There's nothing more to be said about placeholder text. I'm the end-all, be-all of placeholder text." - Adapted from *[Details, 2009](http://www.details.com/culture-trends/cover-stars/200902/hip-hop-artist-kanye-west-talks-fashion-and-music)*

*by Ty-Lucas Kelley*

---

###Background

All you other placeholder text generators ain't got the answers. You ain't been doing the education. What's the name of your clothing line? We don't know. What we do know is that I am the number one Lorem Ipsum generator on the planet.

I know people get mad at me when I compare myself, but that's the only way I can explain what my aspirations are. When I'm talkin' bout' Walt Disney, when I'm talkin' 'bout Howard Hughes, when I'm talkin' 'bout Henry Ford, when I'm talkin' 'bout Beethoven, when I talk about Mozart, when I talk about Shakespeare, and they all had their time on this earth. And now I have mine.

###Installation

To use Kanye Ipsum, you just need jQuery and the `jquery.kanye-ipsum.min.js` file. This installation process is only for those who want to see the demo:

Before you can download and see the Kanye Ipsum demo, get these three things:

1. [Node.js](http://nodejs.org/)
2. [npm](http://npmjs.org)
3. [git](http://git-scm.com/)

Once that's all set, the rest of the process is painless:

1. `$ git clone https://github.com/tylucaskelley/kanye-ipsum.git`
2. `$ cd kanye-ipsum`
3. `$ npm install`
4. `$ npm start`

Go to http://localhost:8080 to see a working demo of Kanye Ipsum!

Note that `npm install` installs a ton of stuff:

    node_modules/
        bootstrap/
        chai/
        chai-webdriver/
        chromedriver/
        http-server/
        jquery/
        jshint/
        mocha/
        node-http-server/
        normalize.css/
        selenium-webdriver/

Note that this is all for the demo app and my own testing; you don't need any of it to get Kanye quotes on your website!

###Usage

Include jQuery and the `jquery.kanye-ipsum.min.js` file in your HTML and you'll be ready to go. Usage is pretty simple:

        <p id="i-wish-i-was-kanye">
            i lernd to kode at w3 skools
        </p>
        
Let's add some of me to that `<p>` tag:

        <script type="text/javascript">
            $(document).ready(function() {
                $('#i-wish-i-was-kanye').kanye();
            });
        </script>

*Before*:

> Lorem ipsum lame dolor sit amet, consectetur i don't have my own clothing line adipiscing elit, sed this placeholder text isn't creative do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in this sucks voluptate velit esse cillum i don't have the answersdolore eu fugiat nulla pariatur. I suck excepteur sint occaecat cupidatat i wish i was kanye non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

*After*:

> I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.

Note that if you call `.kanye()` on an object like `$('p')`, it will generate new placeholder text for every single `p` tag on your page.

###Customization

Kanye Ipsum comes with some default options that you can customize by passing in an object:

    $('.my-element').kanye({
        angry: true,
        explicit: false,
        length: 'rant'
    });
    
Here's a list of all of the options and their default values:

* angry: [true | false] - default: false
* explicit: [true | false] - default: true
* length: ['short' | 'rant'] - default: 'short'

That's all there is to it! Now you can go to bed happy tonight, knowing that you'll never have boring placeholder text again.

###Coming Soon

See TODO.md for what I have in store next.