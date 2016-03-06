/*!
* Kanye Ipsum v3.0.1
* https://github.com/tylucaskelley
*
* Includes jQuery
* http://jquery.com/
*
* Copyright (c) 2015-2016 Ty-Lucas Kelley and other contributors
* Released under the MIT license
* https://raw.githubusercontent.com/tylucaskelley/kanye-ipsum/master/LICENSE
*
* Date: {timestamp}
*/
(($) => {
    'use strict';

    $.fn.kanye = function(opts) {
        let self = $.fn.kanye;

        /**
        * Filters text for profanity
        * @param {String} text Text to filter
        * @returns {String}
        */
        self.filter = function(text) {
            let regex = /shit|fuck|bitch|nigga|nigger|damn/ig;
            let new_text = text.replace(regex, (s) => {
                let i = 0;
                let stars = '';

                while (i < s.length) {
                    stars += '*';
                    i++;
                }

                return stars;
            });

            return new_text;
        };

        /**
        * Generates random number with a max value of n
        * @param {number} n Max value
        * @returns {Number}
        */
        self.rand = function(n) {
            return Math.floor(Math.random() * n);
        };

        /**
        * Default options
        */
        self.defaults = {
            angry: false,
            explicit: true,
            paragraphs: 1
        };

        self.quotes = [
            "I’m standing up and I'm telling you, I am Warhol. I am the number one most impactful artist of our generation. I am Shakespeare, in the flesh. Walt Disney, Nike, Google... Now who's going to be the Medici Family and stand up and let me create more? Or do you want to marginalize me until I’m out of my moment?",
            "You ain't been doing the education, Sway.",
            "The other side is so, so, so, so strong in trying to beat down, and demonize and dishumanize – and I don’t know if that’s a word or not, and if it’s not a word, then I said it’s a fucking word.",
            "Put this in the magazine: There's nothing more to be said about music. I'm the fucking end-all, be-all of music.",
            "Jay is Kweli's favorite rapper, 50 is Eminem's favorite rapper, and I'm my favorite rapper.",
            "A lot of people were wondering what I was going to do if I didn't win anything. I guess we'll never know.",
            "I am so credible and so influential and so relevant that I will change things.",
            "Yo Taylor, I'm really happy for you, I'll let you finish, but Beyonc&#233; has one of the best videos of all time. One of the best videos of all time!",
            "I don't even listen to rap. My apartment is too nice to listen to rap in.",
            "I actually don't want to win anymore Grammy's because I got 10, and that's the perfect number.",
            "Sometimes I get emotional over fonts.",
            "My music isn't just music: it's medicine.",
            "'Everything I'm not made me everything I am.' In my humble opinion, that's a prophetic statement. Ghandi would have said something like that.",
            "Come on now! How could you be me and want to be someone else?",
            "When I think of competition it's like I try to create against the past. I think about Michelangelo and Picasso. You know, the pyramids.",
            "I'm the No. 1 living and breathing rock star.",
            "When someone comes up and says something like, 'I am a god', everybody says 'Who does he think he is??'. I just told you who I thought I was. A god.",
            "For me to say I wasn't a genuis, I would just have to be lying to you and myself.",
            "I'm like a vessel, and God has chosen me to be the voice and the connector.",
            "The problem I have with the paparazzi is if they&#39;re right in front of you and you&#39;re like, “Can you please not take a picture of me?” And they&#39;re like, “Dude I&#39;m not really taking a picture,” and they just keep on doing it like they’re talking to me like I’m stupid and stuff, and then, with arm sprints, I’m going to grab the camera, that just happens, and you don’t expect that to happen with a celebrity, cause you think they&#39;re like a museum animal and stuff, but it’s like, don’t shoot the animals, then, maybe, I don’t know.",
            "I feel like if a rapper disses me, they're just trying to get a rise out of me and get me to play in their field to find some way that they can beat me. I feel like there's a lot of rappers that can beat me in ignorance. So why would I play a sport that I'm not particularly trying to get better at or beaten in? There's a lot of rappers that can beat me in ignorance, but there's only a few that can play with true intellect. How fucking perfect is that fucking answer?!",
            "Last time I got here, before I even arrived, they had ‘fuck Kanye’ on the motherfuckin’ port-a-potties. But this year, we gon’ piss on ‘em, on they motherfuckin’ port-a-potties. How many of y'all don't give a fuck about what the press say? It's 2014. College Dropout came out 2004. I want y'all to know, every time I go to the studio, every time I do an interview, every time I make a motherfuckin' t-shirt, the thing I do, I give it everything I got. And when I talk that shit, it's so that you can talk that shit. If you a fan of me, you a fan of your motherfuckin' self. You can do something that'll change the world. Look at how they try to make me look. They try to make me look crazy.",
            "I need a new cool. What's the new shit out? What's the new shit out with the most commercials at the Super Bowl? Let's just stop the music and play a Bruno Mars song right now, how about that? They told me I would never play at the Super Bowl. They told me I could never play at the Super Bowl. Not until I'm super old. Not until I'm super old... They told me I would never play at the Super Bowl. They told me I would never play at the Super Bowl, at least not until I'm super old. So I think it's time&#150hold up, f&#151k that toast.",
            "I know people get mad at me when I compare myself, but that's the only way I can explain what my aspirations are. When I'm talkin' 'bout Walt Disney, when I'm talkin' 'bout Howard Hughes, when I'm talkin' 'bout Henry Ford, when I'm talkin' 'bout Beethoven, when I talk about Mozart, when I talk about Shakespeare, and they all had their time on this earth. And I'm only 37. And right now I'm rockin' to 90,000, of y'all motherfuckers right now. So I ain't goin' at anybody on the radio. I'm goin' after Shakespeare. I'm goin' after Walt Disney. I'm going after Howard Hughes. I'm going after David Stern. I'm goin' after Henry Ford. I'm going after Elon Musk. Okay, he is living, but he's my boy.",
            "You ain't got the answers man! You ain't got the answers! (Kanye) You ain't got the answers, Sway! (Kanye) I been doing this more than you! (Doing what more than me?) You ain't got- (C'mon, chill out, bro!) You ain't got the answers! (Kanye, relax!) You ain't got the answers! (Bro, rela- I'm asking you a question!) You ain't been doing the education. (Bro!) You ain't been doing the education! (Kanye, calm down!) You don't have the answers though. (Calm down!) Because you trying to give me advice about something- (No! No no no no, listen) You ain't- You ain't got the answers! You ain't spend 13 million dollars of your own money trying to empower yourself!",
            "I think that&#39;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it&#39;s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.",
            "It&#39;s mixing creativity with the fight like an athlete. Like it&#39;s okay for the athletes to fight and push it, but they want the creative people to shut-up and be quiet. But these are the people with the real ideas that can actually change, can reorganize, can design cities, can restructure a curriculum, you know, can make life easier. And that&#39;s the part of the game I want to be in: the making life more awesome.",
            "My greatest power... I’m not a billionaire. I may not be the richest person on the planet. I might not be the most attractive guy. I might be the most liked, but, I right now, because of ‘New Slaves’, and because of the position I’ve always taken, have the most powerful voice by a mile. By a mile. And I’m gonna use that... I’ve got a trillion dollars worth of voice!",
            "Now, you can see my face on the Internet every motherfucking day. I came here, I open up a motherfucking mountain... and you tryin&#39; tell me how to give you my art. Now tell me something, ya&#39;ll want me to do this show the way I would do this show? Don’t fucking heckle me. I&#39;m Kanye motherfucking West.",
            "My goal, if I was going to do art, fine art, would have been to become Picasso or greater... That always sounds so funny to people, comparing yourself to someone who has done so much, and that’s a mentality that suppresses humanity...",
            "One of my biggest achilles heels has been my ego. And if I, Kanye West, can remove my ego, I think there’s hope for everyone.",
            "I don’t think there’s a living celebrity with more weapons formed against him, but I don’t think there’s one more prosperous.",
            "So, the voices in my head told me go, and then I just walked up, like, halfway up the stage... But I just didn’t really want to take away from Beck’s moment, or the time he’s having to talk. It was kind of a joke – like the Grammys themselves.",
            "I am God's vessel. But my greatest pain in life is that I will never be able to see myself perform live.",
            "I think what Kanye West is going to mean is something similar to what Steve Jobs means. I am undoubtedly, you know, Steve of internet, downtown, fashion, culture. Period. By a long jump. I honestly feel that because Steve has passed, you know, it’s like when Biggie passed and Jay-Z was allowed to become Jay-Z.",
            "One of the problems with being a bubbling source of creativity - it's like I'm bubbling in a laboratory, and if you don't put a cap on it, at one point it will, like, break the glass. If I can hone that... then I have, like, nuclear power, like a superhero, like Cyclops when he puts his glasses on.",
            "You should only believe about 90 percent of what I say. As a matter of fact, don’t even believe anything that I’m saying at all. I could be completely fucking with you, and the world, the entire time.",
            "I'm a pop enigma. I live and breathe every element in life. I rock a bespoke suit and I go to Harold's for fried chicken. It's all these things at once, because, as a taste maker, I find the best of everything.",
            "People ask me a lot about my drive. I think it comes from, like, having a sexual addiction at a really young age. Look at the drive that people have to get sex - to dress like this and get a haircut and be in the club in the freezing cold at 3 A.M., the places they go to pick up a girl. If you can focus the energy into something valuable, put that into work ethic.",
            "When you're the absolute best, you get hated on the most.",
            "Sometimes people write novels and they just be so wordy and so self-absorbed. I am not a fan of books. I would never want a book's autograph. I am a proud non-reader of books.",
            "I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle.",
            "Will Ferrell has reached walking living breathing God status!",
            "There are some lame fake accounts trying to make Kanye-isms that are not Mark Twain level.",
            "I'm not even going to lie to you. I love me so much right now."
        ];

        /**
        * Replaces selected text with quotes
        */
        $(this).each(() => {
            let current = $(this);
            let options = $.extend({}, self.defaults, opts);
            let result = '';

            for (let i = 1; i < options.paragraphs; i++) {
                result += self.quotes[self.rand(self.quotes.length)] + '<br><br>';
            }

            result += self.quotes[self.rand(self.quotes.length)];
            result = options.explicit === false ? self.filter(result) : result;
            result = options.angry === true ? result.toUpperCase() : result;

            current.addClass('kanye-ipsum');
            current.text(result);
            current.html(current.text());

            return this;
        });
    };
})(jQuery);
