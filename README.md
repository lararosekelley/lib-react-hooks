# Kanye Ipsum

**A jQuery plugin for adding some confidence to your placeholder text**

> "Put this in the magazine: There's nothing more to be said about placeholder text. I'm the end-all, be-all of placeholder text." - Adapted from *[Details, 2009](http://www.details.com/culture-trends/cover-stars/200902/hip-hop-artist-kanye-west-talks-fashion-and-music)*

*by Ty-Lucas Kelley*

---

### Latest Changes

* Cleaned up, switched to ES6 & Gulp, published on Bower & NPM, more quotes (3/6/2016)
* Published on jQuery Registry, NPM, and Bower (5/23/2015)
* Cleaned up and stripped project down to the essentials (5/23/2015)
* Minify every time server is started (9/13/2014)
* More short quotes (9/13/2014)

### Background

All you other placeholder text generators ain't got the answers. You ain't been doing the education. What's the name of your clothing line? We don't know. What we do know is that I am the number one Lorem Ipsum generator on the planet.

I know people get mad at me when I compare myself, but that's the only way I can explain what my aspirations are. When I'm talkin' bout' Walt Disney, when I'm talkin' 'bout Howard Hughes, when I'm talkin' 'bout Henry Ford, when I'm talkin' 'bout Beethoven, when I talk about Mozart, when I talk about Shakespeare, and they all had their time on this earth. And now I have mine.

![screenshot](https://raw.githubusercontent.com/tylucaskelley/kanye-ipsum/e4b624968d9bc8ab6bebfea279fe13ae39b8d1b9/img/kanye-ipsum.png)

### Installation

Simply install `kanye-ipsum` with npm or bower. Or, grab the minified file from
the `dist` folder. All you need is jQuery to use it.

### Usage

Include jQuery and the `dist/jquery.kanye-ipsum.min.js` file in your HTML and you'll be ready to go. Usage is pretty simple:

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

Note that if you call `.kanye()` on a DOM node like `$('p')`, it will generate new placeholder text for every single `p` tag on your page.

### Customization

Kanye Ipsum comes with some default options that you can customize by passing in an object:

    $('.my-element').kanye({
        angry: true,
        explicit: false,
        paragraphs: 3
    });

Here's a list of all of the options and their default values:

* angry: bool (default: false)
* explicit: bool (default: true)
* paragraphs: int (default: 1)

That's all there is to it! Now you can go to bed happy tonight, knowing that you'll never have boring placeholder text again.
