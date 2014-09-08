#Kanye Ipsum

**jQuery plugin for making the greatest placeholder text in the universe**

> "Put this in the magazine: There's nothing more to be said about placeholder text. I'm the end-all, be-all of placeholder text." - Adapted from *[Details, 2009](http://www.details.com/culture-trends/cover-stars/200902/hip-hop-artist-kanye-west-talks-fashion-and-music)*

Need I say more?

---

###Background

All you other placeholder text generators ain't got the answers. You ain't been doing the education. What's the name of your clothing line? We don't know. What we do know is that I am the number one Lorem Ipsum generator on the planet.

I know people get mad at me when I compare myself, but that's the only way I can explain what my aspirations are. When I'm talkin' bout' Walt Disney, when I'm talkin' 'bout Howard Hughes, when I'm talkin' 'bout Henry Ford, when I'm talkin' 'bout Beethoven, when I talk about Mozart, when I talk about Shakespeare, and they all had their time on this earth. And now I have mine.

###Installation

1. Clone the repo: `$ git clone https://github.com/tylucaskelley/kanye-ipsum.git`
2. Make sure you have NodeJS and NPM installed
3. Run `$ cd kanye-ipsum`
4. Run `$ npm install`
5. Run `$ npm start`
6. Go to http://localhost:8080

###Usage

Improve the lame website you're developing by 1,000,000%:

*Before*:

> Lorem ipsum lame dolor sit amet, consectetur i don't have my own clothing line adipiscing elit, sed this placeholder text isn't creative do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in this sucks voluptate velit esse cillum i don't have the answersdolore eu fugiat nulla pariatur. I suck excepteur sint occaecat cupidatat i wish i was kanye non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

*After*:

> I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.

Y'all probably wondering how I do this. I'll try to explain it so y'all can understand. Take a look at some of your weak HTML:

        <p id="lame">
            i lernd to kode at w3 skools
        </p>
        
Let's add some of me to that `<p>` tag:

        <script type="text/javascript">
            $(document).ready(function() {
                $('#lame').kanye();
            });
        </script>
        
Not so lame now:

    <p id="lame">
        I want y'all to know, every time I go to the studio, every time I do an interview, every time I make a motherfuckin' t-shirt, the thing I do, I give it everything I got. And when I talk that shit, it's so that you can talk that shit. If you a fan of me, you a fan of your motherfuckin' self.
    </p>
    
You can call `.kanye()` on any element that needs some better text. Use me with responsibility though. If you call me on an object like `$('p')`, I'm gonna improve the hell out of every single `p` tag on your lame page. I will be as specific with my improvements as you are; no more, no less.
    
###Customization

I know, I know. Take a step back. You're probably thinking, "but Kanye Ipsum, you're already perfect!". That's true, but you can still change a few things around if needed. You can pass in options like this:

    $('.my-element').kanye({
        angry: true,
        explicit: false,
        length: 'rant'
    });
    
Here's a list of all of the options and their default values:

* angry: [true | false] (default: false)
* explicit: [true | false] (default: true)
* length: ['short' | 'rant'] (default: 'short')

And since y'all so jealous and I feel bad, I even give you access to my brilliant quotes, accessible via `$.fn.kanye.quotes`.